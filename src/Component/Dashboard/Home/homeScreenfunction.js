import moment from "moment";
import * as Location from "expo-location";
import { Alert } from "react-native";
import Api from "../../../Utils/Api";
import { API_URL } from "../../../Utils/Api_url";
import * as SplashScreen from "expo-splash-screen";


export async function selectDate(thisObj, countDay) {
  let d = new Date();
  let tempDate = moment(d).add(countDay, "days");

  thisObj.setState({
    ...thisObj.state,
    selectedDate: tempDate,
    daySelect: countDay,
  });
}

export async function hourAction(thisObj, type) {
  let tempHour = thisObj.state.hourCount;

  if (type == "sub" && tempHour > 0) {
    tempHour -= 1;
  } else {
    tempHour += 1;
  }

  let tempEndHour = moment(new Date()).add(tempHour, "hours");
  thisObj.setState({
    ...thisObj.state,
    hourCount: tempHour,
    endTime: tempEndHour,
  });
}





export async function scheduleSubmit(thisObj) {
  let location = await Location.getCurrentPositionAsync({
    enableHighAccuracy: true,
  });
  let origin = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
  console.log(location);
  let slot = thisObj.props.slot[0];
  slot["startTime"] = thisObj.state.startTime;
  (slot["endTime"] = thisObj.state.endTime),
    (slot["hour_count"] = thisObj.state.hourCount);
  slot["amount"] = thisObj.state.hourCount * slot.spot_price;
  thisObj.props.addSlot(slot);
  thisObj.start();
  thisObj.setState({ ...thisObj.state, showTimer: true });
  // thisObj.props.thatObj.setState({ ... thisObj.props.thatObj.state, botomSheetType: "Pay", bottomSheetTitle:"Pay"});
}



export default function showAlert(msg) {
  Alert.alert(
    "Parkrin",
    msg,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ],
    { cancelable: false }
  );
}
