import  React from "react";
import {  View,StyleSheet,Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
export default function BottomLine(props) {
   

 return (
         <View style={styles.headingView}>
           <Text style={styles.headingText}>{props.heading}</Text>

        </View>
    );
    
  
}

const styles=StyleSheet.create({
    headingView:{width:wp('100%'),height:hp('10%'), flexDirection:'row',backgroundColor:'#222628',alignSelf:'center'},
    headingText:{
        color:'#FF9F09',
        fontSize:hp('4.5%'),
        alignSelf:'flex-end',
        width:wp('80%'),
        paddingLeft:wp('8%')
        
    }
})
