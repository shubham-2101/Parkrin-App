
import AsyncStorage from "@react-native-async-storage/async-storage";

import {Alert } from "react-native";
import Api from '../../../Utils/Api'
import {API_URL} from "../../../Utils/Api_url"



  
export async function createUserCard(formData,setLoading,setErrorData,navigation,props){
    if(formData.card_name.length==0)
    {
      setErrorData((prevState)=>({
        ...prevState,
        card_name:"Plese enter card name",
      }))
      return
    }
    if(formData.card_number.length==0)
    {
      setErrorData((prevState)=>({
        ...prevState,
        card_number:"Plese enter card number",
      }))
      return
    }
    if(formData.cvv_number.length==0)
    {
      setErrorData((prevState)=>({
        ...prevState,
        card_number:"Plese enter cvv number",
      }))
      return
    }
    if(formData.card_holder.length==0)
    {
      setErrorData((prevState)=>({
        ...prevState,
        card_holder:"Plese enter card holder name",
      }))
      return
    }
    if(formData.expiry_month.length==0)
    {
      setErrorData((prevState)=>({
        ...prevState,
        expiry_month:"Plese enter expiry month",
      }))
      return
    }
    if(formData.expiry_year.length==0)
    {
      setErrorData((prevState)=>({
        ...prevState,
        expiry_year:"Plese enter expiry year",
      }))
      return
    }
  
  
   
    console.log(formData)
     setLoading(true)
    const responsedata = await Api.getDataUsingPost(API_URL.addUserCard,formData,navigation);
     setLoading(false)
     console.log(responsedata)
    if(!responsedata.log || !responsedata.response.success)
    {
        showAlert("Something wrong ") 
        return
    }
  
    showAlert("Successfully done") 

    let user =props.user
    user['cardInfo']=formData
    props.addUser(user)
    // checkAuth(props)
}  


// export async function checkAuth(props){
//   const responsedata = await Api.getDataUsingGet(API_URL.authMe,props.navigation);
 
//   if(!responsedata.log || !responsedata.response.success)
//   {
//     console.log(error)
//   }
//   else{
    
//   }

// }














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