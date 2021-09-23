
import AsyncStorage from "@react-native-async-storage/async-storage";

import {Alert } from "react-native";
import Api from '../../Utils/Api'
import {API_URL} from "../../Utils/Api_url"
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export  async function screnNavigation(navigation,screenName){
    navigation.navigate(screenName);
  } 

  
export async function submitSignUpForm(thisObj){
    if(thisObj.state.formData.first_name.length==0)
    {
      thisObj.setState({ errorData: { ...thisObj.state.errorData, firstNameError: "Please enter first name", }, })
      return
    }
    if(thisObj.state.formData.last_name.length==0)
    {
      thisObj.setState({ errorData: { ...thisObj.state.errorData, lastNameError: "Please enter first name", }, })
      return
    }
    if(!reg.test(thisObj.state.formData.email))
    {
      thisObj.setState({ errorData: { ...thisObj.state.errorData, emailError: "Please enter valid email", }, })
      return
    }
    if(thisObj.state.formData.password.length==0)
    {
      thisObj.setState({ errorData: { ...thisObj.state.errorData, passwordError: "Please enter password", }, })
      return
    }
    if(!thisObj.state.checked)
    {
      showAlert("Please select term& condition ") 
      return
    }

    thisObj.setState({isLoading:true})
    const responsedata = await Api.getDataUsingPost(API_URL.registerUser,thisObj.state.formData,thisObj.props.navigation);
     console.log(responsedata)
   
    if(!responsedata.log || !responsedata.response.success)
    {

        showAlert("Something wrong ") 
        thisObj.setState({isLoading:false})
        return
    }
    try {
      await AsyncStorage.setItem( 'parkrin_token', JSON.stringify(responsedata.response.access_token),);
    } catch (e) {
      console.log(e);
    }
    checkAuth(thisObj)

}  





export async function submitSignInForm(thisObj){
  if(!reg.test(thisObj.state.formData.email))
  {
    thisObj.setState({ errorData: { ...thisObj.state.errorData, emailError: "Please enter valid email", }, })
    return
  }
  if(thisObj.state.formData.password.length==0)
  {
    thisObj.setState({ errorData: { ...thisObj.state.errorData, passwordError: "Please enter password", }, })
    return
  }
  thisObj.setState({isLoading:true})
  const responsedata = await Api.getDataUsingPost(API_URL.signinUser,thisObj.state.formData,thisObj.props.navigation);
   console.log(responsedata)
  
  if(!responsedata.log || !responsedata.response.success)
  {
      showAlert(responsedata.response.error.error) 
      thisObj.setState({isLoading:false})
      return
  }
  try {
    await AsyncStorage.setItem( 'parkrin_token', JSON.stringify(responsedata.response.access_token),);
  } catch (e) {
    console.log(e);
  }
 
  checkAuth(thisObj)
}  




export async function checkAuth(thisObj){
  

 const responsedata = await Api.getDataUsingGet(API_URL.authMe);
 console.log(responsedata);
 thisObj.setState({isLoading:false})
 if(!responsedata.log || !responsedata.response.success)
 {
 
   thisObj.props.navigation.reset({
    index: 1,
    routes: [{ name: "Account" }],
  });
     return
 }

thisObj.props.addUser(responsedata.response.data.user)
 thisObj.props.navigation.reset({
   index: 1,
   routes: [{ name: "Dashboard" }],
 });
 
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