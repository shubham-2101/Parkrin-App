import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import styles from './styles'

export default function index() {
  

  return (
    <View style={styles.topiew}>
      <Text style={{ fontFamily: 'WorkSans', fontSize: hp('8%'),fontWeight:'bold',color:'#FFDE6D' }}>Parkirin</Text>
      <Text style={{ fontFamily: 'WorkSans', fontSize: hp('2%'),fontWeight:'bold',color:'#FFFFFF' }}>Smart Way towards hassle free Parking</Text>
    </View>
  );
}



