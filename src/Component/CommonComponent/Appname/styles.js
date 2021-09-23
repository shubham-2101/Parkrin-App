import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";


const styles = StyleSheet.create({

  topiew:{
    position: 'absolute',
    height:hp("60%"),
    right: 0,
    top:0,
    left: 0,
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    backgroundColor:'transparent',
    
    
  },
 
 
});

export default styles;
