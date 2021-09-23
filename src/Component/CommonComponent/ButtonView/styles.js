import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";


const styles = StyleSheet.create({

  bottonView:{
   
    height:hp("6%"),
    width:wp('80%'),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:'#3F2E00',
    borderWidth:1,
    marginTop:20
    
  },
 
 
});

export default styles;
