import { isLoading } from "expo-font";
import moment from "moment";
import * as Location from 'expo-location';
import {Alert } from "react-native";
import Api from '../../../Utils/Api'
import {API_URL} from '../../../Utils/Api_url'




export async function getSpotList(thisObj){

    thisObj.setState({isLoading:true})
    const responsedata = await Api.getDataUsingGet(API_URL.getSpotListById,thisObj.props.navigation);
    console.log(responsedata)
    thisObj.setState({isLoading:false})
    if(!responsedata.log || !responsedata.response.success)
    {
  
        showAlert("Something wrong ") 
        return
    }
     thisObj.setState({...thisObj.state,spotList:responsedata.response.data.spotList})
}





export async function adddSpot(thisObj){

  if(thisObj.state.spot.spot_name.length==0)
  {
    thisObj.setState({ errorData: { ...thisObj.state.errorData, spot_name_error: "Please enter spot name", }, })
    return
  }
  if(thisObj.state.spot.vehicle_type.length==0)
  {
    thisObj.setState({ errorData: { ...thisObj.state.errorData, vehicle_type_error: "Please enter vehicle type", }, })
    return
  }
  if(thisObj.state.spot.no_of_spots.length==0)
  {
    thisObj.setState({ errorData: { ...thisObj.state.errorData, no_of_spots_error: "Please enter no of spots", }, })
    return
  }
  if(thisObj.state.spot.address.length==0)
  {
    thisObj.setState({ errorData: { ...thisObj.state.errorData, address_error: "Please enter spot address", }, })
    return
  }
  if(thisObj.state.spot.spot_price.length==0)
  {
    thisObj.setState({ errorData: { ...thisObj.state.errorData, spot_price_error: "Please enter spot price", }, })
    return
  }





    thisObj.setState({isLoading:true})
    const responsedata = await Api.getDataUsingPost(API_URL.addSpotByUser,thisObj.state.spot,thisObj.props.navigation);
     console.log(responsedata)
    if(!responsedata.log || !responsedata.response.success)
    {
        showAlert(responsedata.response.error.error) 
        thisObj.setState({isLoading:false})
        return
    }
    thisObj.props.navigation.navigate('SpotList')
  
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