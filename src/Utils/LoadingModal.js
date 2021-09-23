import React, { Component } from 'react'
import { View,ActivityIndicator,Modal,Image } from 'react-native';

const LoadingModal=(prop)=>
{
    
return(
        <Modal animationType="slide" transparent={true} visible={prop.visible} >
             <View style={{flex:1,backgroundColor:'#282C3FB2',justifyContent:'center',alignItems:'center'}}>
                  <ActivityIndicator size="large" color="#FFDE6D" />
                  {/* <Image source={require('../../assets/images/Splash/loading.gif')} /> */}
            </View>
        </Modal>
);

};



export default LoadingModal;