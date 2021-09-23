
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const windowHeight = Dimensions.get("window").height;
const value=[hp("48%"), windowHeight, windowHeight * 0.76]
const SnapPoint = (state = [value], action) => {

    switch (action.type) {
      case 'SET_SLOT':
        return [action.payload]
  
      case 'SHOW_SLOT':
        return state
      default:
        return state
    }
  
  }
  export default SnapPoint;