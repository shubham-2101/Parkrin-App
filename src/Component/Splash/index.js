


import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from './WelcomeScreen'
import Intro1 from './Intro1'



export default function index() {
  const Stack = createStackNavigator();
 
  return (
 
      <Stack.Navigator initialRouteName="WelcomeScreen" headerMode="none" >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Intro1" component={Intro1} /> 
      </Stack.Navigator>

  );
}
