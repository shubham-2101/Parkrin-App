


import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from './MapScreen'
import SlotInfo from './SlotInfo'
import BookingReceipt from './BookingReceipt'



export default function index() {
  const Stack = createStackNavigator();
 
  return (
 
      <Stack.Navigator initialRouteName="MapScreen" headerMode="none" >
         <Stack.Screen name="MapScreen" component={MapScreen} />
         <Stack.Screen name="SlotInfo" component={SlotInfo} /> 
         <Stack.Screen name="BookingReceipt" component={BookingReceipt} /> 
        
       
      </Stack.Navigator>

  );
}
