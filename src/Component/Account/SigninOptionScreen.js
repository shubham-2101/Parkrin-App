import  React,{useState,useEffect} from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Appname from "../CommonComponent/Appname";
import ButtonView from "../CommonComponent/ButtonView";
import styles from "./styles";
import { checkFirst, screnNavigation, skipNavigation } from "./AccountFunction";

export default function SigninOptionScreen({navigation}) {
  
 



    
    return (
      // <ImageBackground
      //   style={styles.container}
      //   source={require("../../../assets/images/Splash/background.png")}
      // >
        <View style={styles.overlayView}>
          <Appname />

          <View style={styles.bottomView}>
          
            <ButtonView
              buttonText={"login"}
              eventFunction={() => screnNavigation(navigation, "Login")}
              buttonColor={"#3F2E00"}
            />
           <ButtonView
              buttonText={"signup"}
              eventFunction={() => screnNavigation(navigation, "Signup")}
              buttonColor={"transaprent"}
            />
            <Text style={styles.termMsg}>{`By signing up, you agree to `}<Text style={{ textDecorationLine: 'underline'}}>{`our terms of services`}</Text></Text>
          </View>
        </View>
      // </ImageBackground>
    );
  
}
