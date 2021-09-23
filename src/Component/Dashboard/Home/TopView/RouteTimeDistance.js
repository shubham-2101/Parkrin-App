import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, Entypo } from "@expo/vector-icons";
// import { bookSlot } from "./homeScreenfunction";
export default function RouteTimeDistance({ distanceTime }) {
  return (
    <View style={styles.topView}>
       <View style={styles.searchInputView}>
          <Text style={styles.heading}>Distance</Text>  
          <Text style={styles.textView}>{distanceTime.distance.toFixed(2)} km</Text>
       </View>
       <View style={styles.searchInputView}>
       <Text  style={styles.heading}>Duration</Text> 
       <Text style={styles.textView}>{distanceTime.duration.toFixed(2)} min</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    
    width: wp("100%"),
    position: "absolute",
    top: hp("3%"),
    right: 0,
    left: 0,
    zIndex: 1000,
    alignItems: "center",
    flexDirection:'row',
    justifyContent:'space-between',
   
  },
  searchInputView: {
    width: wp("50%"),
    height: hp("7%"),
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
    borderRadius: 10,
    justifyContent:'center'
  },
  iconView: {
    width: "10%",
  },
  textView: {
    color: "#C4C4C4",
    fontSize: hp("4%"),
  },

  heading: {
    color: "#C4C4C4",
    fontSize: hp("2.2%"),
    paddingRight: 5,
  },
});
