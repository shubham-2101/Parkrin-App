import { isLoading } from "expo-font";
import moment from "moment";
import * as Location from 'expo-location';
import {Alert } from "react-native";
import Api from '../../../Utils/Api'
import {API_URL} from '../../../Utils/Api_url'




export async function getBookingList(thisObj,type){

    let reqData={tabIndex:type}
    thisObj.setState({isLoading:true})
    const responsedata = await Api.getDataUsingPost(API_URL.getbookingList,reqData,thisObj.props.navigation);
    console.log("vvvhvhvv",responsedata)
    thisObj.setState({isLoading:false})
    if(!responsedata.log || !responsedata.response.success)
    {
  
        showAlert("Something wrong ") 
        return
    }
     thisObj.setState({...thisObj.state,bookingList:responsedata.response.data.bookingList})
}


export async function showRoute(thisObj,booking){

    console.log(booking)
    thisObj.props.addBooking(booking)
    thisObj.props.navigation.navigate('MapRoute')
     
  

}


export async function checkLocationPermission (thisObj){

  console.log(thisObj.props.booking[0])
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    setErrorMsg('Permission to access location was denied');
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  thisObj.setState({
                  mapRegion:{...thisObj.state.mapRegion,latitude:location.coords.latitude,longitude:location.coords.longitude,},
                  origin:{...thisObj.state.origin,latitude:location.coords.latitude,longitude:location.coords.longitude},
                  destination:{...thisObj.state.destination,latitude:thisObj.props.booking[0].latitute,longitude:thisObj.props.booking[0].longitute},
                  isLoading:false,
      })

}







export default function showAlert(msg){
  Alert.alert(
    "Parkrin",
     msg,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
}