import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";


const styles = StyleSheet.create({

  overlayView:{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#282C3FB2',
    justifyContent:'space-between',
    flexDirection:'column'
   
  },
 

 
});

export default styles;
