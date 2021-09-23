import * as React from "react";
import { Text, View,ImageBackground, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Appname from '../CommonComponent/Appname'
import ButtonView from '../CommonComponent/ButtonView'
import { skipNavigation } from "./SplashFunction";
import styles from './styles'

export default class Intro1 extends React.Component {
 
  render() {
    return (
      <ImageBackground style={styles.container} source={require("../../../assets/images/Splash/introBackground.png")}>
        <View style={[styles.bottomView,{backgroundColor:'#282C3FB2'}]}>
          <Text style={styles.into1Head}>{`Search, Locate, Pin \nand Park`}</Text>
          <Text style={styles.introMsg}>{`End the hussle of finding parking on \nbusy days.`}</Text>
          <View style={styles.lowerView}>
          <TouchableOpacity    onPress={skipNavigation(this.props.navigation,"Account")}><Text style={styles.skipText}>SKIP</Text></TouchableOpacity>
          <TouchableOpacity  style={styles.nextButton} onPress={skipNavigation(this.props.navigation,"Account")}><Text style={styles.buttonText}>NEXT</Text></TouchableOpacity>
          </View>
        </View>
        
      </ImageBackground>
    );
  }
}

