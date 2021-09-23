
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ShowProfile from './ShowProfile'
import EditProfile from './EditProfile'




export default function index() {
  const Stack = createStackNavigator();
 
  return (
 
      <Stack.Navigator initialRouteName="ShowProfile" headerMode="none" >
         <Stack.Screen name="ShowProfile" component={ShowProfile} />
         <Stack.Screen name="EditProfile" component={EditProfile} /> 
         
        
       
      </Stack.Navigator>

  );
}
