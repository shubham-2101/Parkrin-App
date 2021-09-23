import  React from "react";
import {  View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
export default function BottomLine({navigation}) {
   

 return (
    <View style={{width:wp('90%'),height:2,backgroundColor:'#C4C4C4',position:'absolute',bottom:0}}/>
    );
    
  
}
