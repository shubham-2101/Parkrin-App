
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SpotList from './SpotList'
import AddSpot from './AddSpot'




export default function index() {
  const Stack = createStackNavigator();
 
  return (
 
      <Stack.Navigator initialRouteName="SpotList" headerMode="none" >
         <Stack.Screen name="SpotList" component={SpotList} />
         <Stack.Screen name="AddSpot" component={AddSpot} /> 
         
        
       
      </Stack.Navigator>

  );
}
