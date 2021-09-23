import moment from "moment";
import * as Location from "expo-location";
import { Alert,Linking } from "react-native";
import Api from "../../../../Utils/Api";
import { API_URL } from "../../../../Utils/Api_url";
import { calculateDistance } from "../../../../Utils/distanceFunctions";

export const checkLocationPermission = async (thisObj) => {

  if(thisObj.props.booking!=null){
    skipNavigation(thisObj.props.navigation,"BookingReceipt");
    return
  }
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    showAlert("Permission to access location was denied")
    return
  }
  try {
    let location = await Location.getCurrentPositionAsync({});

    thisObj.setState({
      mapRegion: {
        ...thisObj.state.mapRegion,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      location: {
        ...thisObj.state.location,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      origin: {
        ...thisObj.state.origin,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
    getSpotist(thisObj);
  } catch (error) {
    console.log(error);
    checkLocationPermission(thisObj)
  }
};

export const getSpotist = async (thisObj) => {
  if (
    thisObj.state.origin.latitude == 0.0 &&
    thisObj.state.origin.longitude == 0.0
  ) {
    showAlert("Please enable location  ");
    return;
  }
  let reqData = {
    latitude: thisObj.state.origin.latitude,
    longitude: thisObj.state.origin.longitude,
    distance: thisObj.state.searchDistance,
  };
  const responsedata = await Api.getDataUsingPost(
    API_URL.getSpotList,
    reqData,
    thisObj.props.navigation
  );
  if (!responsedata.log || !responsedata.response.success) {
    showAlert(responsedata.error);
    thisObj.setState({ isLoading: false });
    return;
  }
  thisObj.setState({
    ...thisObj.state,
    spotList: responsedata.response.data.spotList,
  });

  setTimeout(() => {
    thisObj.setState({ ...thisObj.state, isLoading: false });
  }, 3000);
};

export const bookSlot = async (thisObj, item) => {
  thisObj.props.addSlot(item);
  thisObj.setState({
    ...thisObj.state,
    botomSheetType: "SpotInfo",
    bottomSheetTitle: `${item.spot_name}`,
    selectedSlot: item,
    mapRegion: {
      latitude: thisObj.state.origin.latitude,
      longitude: thisObj.state.origin.longitude,
      latitudeDelta: 0.0005757,
      longitudeDelta: 0.0005466,
    },
    destination: { latitude: item.latitute, longitude: item.longitute },
  });

  startCheckDistanceInterval(thisObj);
};

export const backBottom = async (thisObj, heading) => {
  switch (heading) {
    case "SpotInfo":
      clearCheckDistanceInterval(thisObj);
      thisObj.setState({
        ...thisObj.state,
        botomSheetType: "SpotList",
        bottomSheetTitle: "Parking Nearby",
        selectedSlot: null,
        destination: null,
        mapRegion: {
          latitude: thisObj.state.origin.latitude,
          longitude: thisObj.state.origin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });

      break;
    // case "Pay":
    //   thisObj.setState({ ...thisObj.state, botomSheetType: "Schedule", bottomSheetTitle:"Select Date & Time",});
    // break;
  }
};

export const bookSpotFunction = async (thisObj) => {


  console.log("booking",thisObj.props.booking)
  if (!thisObj.state.selectedSlot || thisObj.state.selectedSlot == null)  {
    return;
  }
  if( thisObj.props.booking != null)
  {
    showAlert("Already Book a slot")
    return
  }
  let reqData = { spot_id: thisObj.state.selectedSlot.id };
  console.log(reqData);
  const responsedata = await Api.getDataUsingPost(
    API_URL.bookSpot,
    reqData,
    thisObj.props.navigation
  );
  console.log(responsedata);
  if (!responsedata.log || !responsedata.response.success) {
    showAlert("Booking not done please rebook ");
    thisObj.setState({ isLoading: false });
    return;
  }
  if(responsedata.response.data.newBooking){
    thisObj.props.addBooking(responsedata.response.data.booking);
    thisObj.props.navigation.navigate("BookingReceipt");
  }
  else{
  thisObj.props.addBooking(null);
  }
  clearCheckDistanceInterval(thisObj)
};



export const startCheckDistanceInterval = (thisObj) => {
  thisObj._interval = setInterval(async () => {
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    thisObj.setState({
      origin: {
        ...thisObj.state.origin,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
    let source = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    let distance = calculateDistance(source, thisObj.state.destination);
    console.log(distance);
    if (distance < 500) {
      bookSpotFunction(thisObj);
    }
  }, 15000);
};

export const clearCheckDistanceInterval = (thisObj) => {
  clearInterval(thisObj._interval);
};

export default function showAlert(msg) {
  Alert.alert(
    "Parkrin",
    msg,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ],
    { cancelable: false }
  );
}


// export  function gpsAlert(msg,thisObj) {
//   Alert.alert(
//     "Parkrin",
//     msg,
//     [
//       {
//         text: "Cancel",
//         onPress: () => console.log("Cancel Pressed"),
//         style: "cancel",
//       },
//       { text: "OK", onPress: () => checkLocationPermission(thisObj)},
//     ],
//     { cancelable: false }
//   );
// }



export const skipNavigation=async(navigation,screen) =>{
 
  navigation.reset({
     index: 1,
     routes: [{ name: screen }],
   });
 }