


import React from "react";
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import Home from './Home'
import RentSpot from './RentSpot'
import Booking from './Booking'
import Profile from './Profile'
import About from './Setting/About'
import Help from './Setting/Help'
import UserCard from './UserCard'






export default function index() {
  const Tab = createMaterialTopTabNavigator();
 
  return (
 
     
      // <Tab.Navigator 
      //  tabBarOptions={{
      //   activeTintColor: '#FF9F09',
      //   style: styles.tabContainer,
      //   labelStyle:styles.tabLabel
        
      // }}  >
      // <Tab.Screen name="Home" component={Home}
      //     options={{
      //       tabBarLabel: 'Home',
      //       tabBarIcon: ({ color, size }) => (
      //         <Image
      //         source={require("../../../assets/images/icons/Home.png")}
      //         style={[styles.imageView,{tintColor:color}]}
      //       />
      //       ),
      //     }}/>
      // <Tab.Screen name="RentSpot" component={RentSpot} 
      //  options={{
      //   tabBarLabel: 'RentSpot',
      //   tabBarIcon: ({ color, size }) => (
      //     <Image
      //     source={require("../../../assets/images/icons/RentSpot.png")}
      //     style={[{tintColor:color,width:wp('8%'),height:hp('6%')}]}
      //   />
      //   ),
      // }}
      // />

      // <Tab.Screen name="Booking" component={Booking}    options={{
      //   tabBarLabel: 'Booking',
      //   tabBarIcon: ({ color, size }) => (
      //     <Image
      //     source={require("../../../assets/images/icons/Booking.png")}
      //     style={[styles.imageView,{tintColor:color}]}
      //   />
      //   ),
      // }}/>
      // <Tab.Screen name="Profile" component={Profile}   options={{
      //   tabBarLabel: 'Profile',
      //   tabBarIcon: ({ color, size }) => (
      //     <Image
      //     source={require("../../../assets/images/icons/Profile.png")}
      //     style={[styles.imageView,{tintColor:color}]}
      //   />
      //   ),
      // }} />
      // </Tab.Navigator>
      <Tab.Navigator
      
      initialRouteName="Home"
      tabBarOptions={{
        scrollEnabled:true,
        activeTintColor: '#FFDE6D',
        labelStyle:styles.tabLabel,
        style: styles.tabContainer,
       
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{ tabBarLabel: 'Booking' }}
      />
       <Tab.Screen
        name="RentSpot"
        component={RentSpot}
        options={{ tabBarLabel: 'RentSpot' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: 'Profile' }}
      />
        <Tab.Screen
        name="Card"
        component={UserCard}
        options={{ tabBarLabel: 'UserCard' }}
      />
      
      <Tab.Screen
        name="About"
        component={About}
        options={{ tabBarLabel: 'About' }}
      />
       <Tab.Screen
        name="Help"
        component={Help}
        options={{ tabBarLabel: 'Help' }}
      />
    </Tab.Navigator>
  );
}








































const styles = StyleSheet.create({
      tabContainer:{
           width:'100%',
            height:hp('10%'),
            backgroundColor:'#1D1D1D',
            
            
      },
      tabBarTouch:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      tabLabel:{
          textAlign:'center',
          fontSize:hp('2.2%'),
          fontWeight:'bold',
          paddingTop:hp('4%'),
        
         
          
      },
      borderView:{
        width:wp('90%'),
        backgroundColor:'#C4C4C4',
        height:6,
        alignSelf:'center',
        borderRadius:5
      },
      imageView:{
        height:hp('2.5%'),
        width:wp('5%')
      }
      
 
});


