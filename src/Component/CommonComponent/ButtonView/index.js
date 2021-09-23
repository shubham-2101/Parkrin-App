import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import styles from './styles'

export default function index({buttonText,eventFunction,buttonColor}) {

  return (
    <TouchableOpacity style={[styles.bottonView,{backgroundColor:buttonColor,}]} onPress={eventFunction}>
      <Text style={[{ fontFamily: 'WorkSans', fontSize: hp('2.2s%'),fontWeight:'normal'},buttonColor=="transparent"?{color:'#FF9F09'}:{color:'#fff'}]}>{buttonText.toUpperCase()}</Text>
     
    </TouchableOpacity>
  );
}



