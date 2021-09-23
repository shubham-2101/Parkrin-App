import { StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1D1D1D",
      alignItems: "center",
      justifyContent: "center",
    },
    map: {
      width: width,
      height: height,
    },
    marker: {
      height: hp("4%"),
      width: hp("4%"),
      backgroundColor: "#FFDE6D",
      borderRadius: hp("2%"),
      alignItems: "center",
      justifyContent: "center",
    },
    markerText: {
      color: "#3F2E00",
      fontSize: hp("2.2%"),
      fontWeight: "bold",
    },
    bottomView: {
      position: "absolute",
      height: hp("50%"),
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#222628",
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
  });
  
  export default styles;