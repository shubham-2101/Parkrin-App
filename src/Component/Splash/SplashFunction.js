import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../../Utils/Api'
import {API_URL} from '../../Utils/Api_url'
import * as Location from "expo-location";

export async function checkFirst(navigation,setisLoading,addUser,addBooking) {
  try {
    let status = await Location.hasServicesEnabledAsync();
    console.log(status)
    const value = await AsyncStorage.getItem("first_time");
    const authValue = await AsyncStorage.getItem("parkrin_token");
    console.log(value,authValue);
    if (value != null && authValue == null ) {
      skipNavigation(navigation,"Account");    
      await SplashScreen.hideAsync(); 
    } 
    else if(value != null && authValue!= null )
    {
      await checkAuth(navigation,addUser,addBooking)
        
    } 
    else{
      setisLoading(false)
      await SplashScreen.hideAsync();
    } 


  } catch (e) {
    console.log(e);
  }
 
 
  await AsyncStorage.setItem("first_time", "true");
 
 
}

export async function screnNavigation(navigation, screenName) {
  navigation.navigate(screenName);
}

export async function skipNavigation(navigation,screen) {
 
 navigation.reset({
    index: 1,
    routes: [{ name: screen }],
  });
}



export async function checkAuth(navigation,addUser,addBooking){
    const responsedata = await Api.getDataUsingGet(API_URL.authMe,navigation);
    //console.log(responsedata);
    if(!responsedata.log || !responsedata.response.success)
    {
      skipNavigation(navigation,"Account");
    }
    else{
    
      addUser(responsedata.response.data.user)
      if(responsedata.response.data.bookingInfo &&responsedata.response.data.bookingInfo!=null ){
        addBooking(responsedata.response.data.bookingInfo)
      
      }
      skipNavigation(navigation,"Dashboard");
      
    }
    await SplashScreen.hideAsync()
}



