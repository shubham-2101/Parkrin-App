


import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SigninOptionScreen from './SigninOptionScreen'
import Login from './Login'
import Signup from './Signup'
import Forget from './ForgetPasswrod'
import Otp from './OtpScreen'


export default function index() {
  const Stack = createStackNavigator();
 
  return (
 
      <Stack.Navigator initialRouteName="SigninOptionScreen" headerMode="none" >
        <Stack.Screen name="SigninOptionScreen" component={SigninOptionScreen} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Signup" component={Signup} /> 
        <Stack.Screen name="Forget" component={Forget} /> 
        <Stack.Screen name="Otp" component={Otp} /> 

      </Stack.Navigator>

  );
}
