import moment from "moment";
import * as Location from "expo-location";
import { Alert } from "react-native";
import Api from "../../../../Utils/Api";
import { API_URL } from "../../../../Utils/Api_url";
import { calculateDistance } from "../../../../Utils/distanceFunctions";

export const checkLocationPermission = async (thisObj) => {
 
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    showAlert("Permission to access location was denied");
    return;
  }
  startCheckDistanceInterval(thisObj)
};





export const startCheckDistanceInterval = (thisObj) => {
  thisObj._intervalBooking = setInterval(async () => {
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: Location.Accuracy.Balanced,
    });
    let source = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    let destination = {
        latitude: thisObj.props.booking.latitute,
        longitude: thisObj.props.booking.longitute,
      };

    let distance = calculateDistance(source,destination);
    console.log(distance);
    if (distance < 500) {
      bookSpotFunction(thisObj);
    }
  }, 15000);
};

export const clearCheckDistanceInterval = (thisObj) => {
  clearInterval(thisObj._intervalBooking);
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


export const bookSpotFunction = async (thisObj) => {


  console.log("booking",thisObj.props.booking)
  let reqData = { spot_id: thisObj.props.booking.spotInfo.id };
  console.log(reqData);
  const responsedata = await Api.getDataUsingPost(
    API_URL.bookSpot,
    reqData,
    thisObj.props.navigation
  );
  console.log(responsedata);
  if (!responsedata.log || !responsedata.response.success) {
    showAlert("Booking not completed");
    thisObj.setState({ isLoading: false });
    return;
  }
  if(!responsedata.response.data.newBooking){
    thisObj.props.addBooking(null);
    skipNavigation(thisObj.props.navigation, "Home")

  }
  clearCheckDistanceInterval(thisObj)
};



export const skipNavigation=async(navigation,screen) =>{
 
  navigation.reset({
     index: 1,
     routes: [{ name: screen }],
   });
 }