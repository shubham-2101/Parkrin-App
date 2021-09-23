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
export default function SearchView({ value, thisObj }) {
  return (
    <View style={styles.topView}>
      <View style={[styles.searchInputView, { backgroundColor: "#222628" }]}>
        <AntDesign
          style={styles.iconView}
          name="search1"
          size={24}
          color="#C4C4C4"
        />
        <TextInput
          style={styles.textView}
          placeholder={"I want to park near"}
          placeholderTextColor="#C4C4C4"
        />
      </View>
      {/* <View
        style={[styles.searchInputView, { justifyContent: "space-between" }]}
      >
        <TouchableOpacity style={styles.tabView}>
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabView}>
          <Entypo name="dot-single" size={25} color="#6b9ded" />
          <Text style={styles.tabText}>Free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabView}>
          <Entypo name="dot-single" size={25} color="#ffb3e6" />
          <Text style={styles.tabText}>Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabView}>
          <Entypo name="dot-single" size={25} color="#1aff1a" />
          <Text style={styles.tabText}>Pro</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    height: hp("13%"),
    width: wp("100%"),

    position: "absolute",
    top: hp("6%"),
    right: 0,
    left: 0,
    zIndex: 1000,
    alignItems: "center",
  },
  searchInputView: {
    width: wp("92%"),
    height: hp("7%"),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
    borderRadius: 10,
  },
  iconView: {
    width: "10%",
  },
  textView: {
    color: "#C4C4C4",
    fontSize: hp("2.2%"),
    width: "90%",
    height: hp("7%"),
    paddingLeft: 10,
  },
  tabView: {
    flexDirection: "row",
    width: wp("20%"),
    height: hp("5%"),
    backgroundColor: "#222628",
    marginTop: hp("0.4%"),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  tabText: {
    color: "#C4C4C4",
    fontSize: hp("2.2%"),
    paddingRight: 5,
  },
});
