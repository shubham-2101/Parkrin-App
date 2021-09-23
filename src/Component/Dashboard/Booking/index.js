
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BookingList from './BookingList'
import MapRoute from './MapRoute'




export default function index() {
  const Stack = createStackNavigator();
 
  return (
 
      <Stack.Navigator initialRouteName="BookingList" headerMode="none" >
         <Stack.Screen name="BookingList" component={BookingList} />
         <Stack.Screen name="MapRoute" component={MapRoute} /> 
         
        
       
      </Stack.Navigator>

  );
}
