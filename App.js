import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashStack from './src/Component/Splash'
import HomeStack from './src/Component/Dashboard'
import AccountStack from './src/Component/Account'
import store from './src/store'
import { Provider } from 'react-redux'




SplashScreen.preventAutoHideAsync()
  .then((result) =>{}
   // console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn);

export default function App({navigation }) {
  const Stack = createStackNavigator();
 
  const [isLoaded] = useFonts({
    WorkSans: require("./assets/fonts/WorkSans.ttf"),
  });
  

  if (!isLoaded) {
    return null;
  }
  return (
    <>
     <Provider store={store}>
     <StatusBar style="dark" backgroundColor={'#fff'} />
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="none" >
        <Stack.Screen name="Splash" component={SplashStack} />
        <Stack.Screen name="Dashboard" component={HomeStack} />
        <Stack.Screen name="Account" component={AccountStack} />


      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
}
