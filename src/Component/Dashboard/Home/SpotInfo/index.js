import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { connect } from "react-redux";

const index = (props) => {
  const { slot } = props;
  return (
    <View style={[styles.container]}>
      <Text style={styles.slotPer}>$ {`${slot[0].spot_price}`} Per Hour</Text>
      <View style={[styles.addressRow]}>
        <Image
          source={require("../../../../../assets/images/icons/position.png")}
        />
        <Text style={styles.noOfSlot}>
          {`${slot[0].no_of_spots}`} Spots left
        </Text>
      </View>
      <Text style={styles.slotAddress}> {`${slot[0].address}`}</Text>

      {/* <TouchableOpacity style={styles.bottonView} onPress={() => paySpot(this)}>
        <Text style={styles.noOfSlot}>Start </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    slot: state.Slot,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSlot: (slot) =>
      dispatch({
        type: "SET_SLOT",
        payload: slot,
      }),

    addBooking: (booking) =>
      dispatch({
        type: "SET_BOOKING",
        payload: booking,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);

const styles = StyleSheet.create({
  container: {
    height: hp("45%"),
    alignItems: "center",
  },
  slotName: {
    color: "#fff",
    fontFamily: "WorkSans",
    fontSize: hp("2.4%"),
  },
  addressRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  slotAddress: {
    color: "#fff",
    fontFamily: "WorkSans",
    fontSize: hp("2.2%"),
    paddingVertical: hp("1%"),
    width: wp("80%"),
    textAlign: "center",
  },
  noOfSlot: {
    color: "#ffe6f7",
    fontSize: hp("2%"),
    paddingLeft: 5,
  },
  Row: {
    width: wp("80%"),
    paddingTop: hp("1%"),
  },
  innerView: {
    backgroundColor: "#000000",
    height: hp("4%"),
    marginVertical: hp("1%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  RowBottom: {
    width: wp("80%"),
    paddingTop: hp("1%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottonView: {
    backgroundColor: "#3F2E00",
    width: wp("20%"),
    height: hp("5%"),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("2%"),
  },
  slotPer: {
    color: "#FF9F09",
    fontSize: hp("2.5%"),
    textAlign: "center",
    paddingVertical: hp("1%"),
  },
  header: {
    width: wp("100%"),
    flexDirection: "column",
    height: hp("8%"),
    backgroundColor: "#222628",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headingTitle: {
    color: "#fff",
    fontSize: hp("2.5%"),
    paddingTop: hp("1%"),
  },
  headerTop: {
    width: wp("10%"),
    height: 1,
    backgroundColor: "#fff",
    position: "absolute",
    top: hp("2%"),
  },
});
