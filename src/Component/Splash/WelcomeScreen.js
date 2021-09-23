import  React,{useState,useEffect} from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Appname from "../CommonComponent/Appname";
import ButtonView from "../CommonComponent/ButtonView";
import styles from "./styles";
import { checkFirst, screnNavigation, skipNavigation } from "./SplashFunction";
import {connect} from 'react-redux';
function WelcomeScreen({navigation,addUser,addBooking}) {
   const [isLoading, setisLoading] = useState(true)

 
  useEffect(() => {
    checkFirst(navigation,setisLoading,addUser,addBooking); 
  }, [])




  

    if (isLoading) {
      return null;
    }
    else{
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../../assets/images/Splash/background.png")}
      >
        <View style={styles.overlayView}>
          <Appname />

          <View style={[styles.bottomView, { backgroundColor: "#fff" }]}>
            <Text style={styles.welcomeText}>Welcome !</Text>
            <Text
              style={styles.welcomeMsg}
            >{`First time on Parkirin ? \nPlease click on continue to view the instructions about our application`}</Text>
            <ButtonView
              buttonText={"continue"}
              eventFunction={() => screnNavigation(navigation, "Intro1")}
              buttonColor={"#FF9F09"}
            />
            <TouchableOpacity onPress={() => skipNavigation(navigation,"Account")}>
              <Text style={styles.skipText}>SKIP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
    }
  
}


const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) =>
      dispatch({
        type: 'SET_USER',
        payload: user,
      }),
    addBooking: (booking) =>
      dispatch({
        type: "SET_BOOKING",
        payload: booking,
      }),
  };
};

export default connect(null, mapDispatchToProps)(WelcomeScreen);