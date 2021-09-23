import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import styles from '../../styles'

export default function index({heading}) {
  

  return (
    <View style={styles.fromHeading}>
      <Text style={{ fontFamily: 'WorkSans', fontSize: hp('6%'),fontWeight:'bold',color:'#FFDE6D',textAlign:'center' }}>{heading.toUpperCase()}</Text>
    </View>
  );
}



