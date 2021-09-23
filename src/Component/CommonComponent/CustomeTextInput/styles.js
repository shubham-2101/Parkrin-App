import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";


const styles = StyleSheet.create({
  mainInputView:{
      marginVertical:hp('1.5%')
  },
  normalTextView:{
    width:wp('80%'),
    height:hp("7%"),
    justifyContent:'center',
    borderRadius:8,
    backgroundColor:'#fff',
    
    
  },
  nomalTextInput:{
    height:hp('7%'),
    paddingHorizontal:wp('6%'),
    fontSize:hp('2%')
  },
  passwordTextView:{
    width:wp('80%'),
    height:hp("7%"),
    justifyContent:'center',
    borderRadius:8,
    backgroundColor:'#fff',
    flexDirection:'row' 
  },
  passwordTextInput:{
    height:hp('7%'),
    paddingHorizontal:wp('6%'),
    fontSize:hp('2%'),
    width:'80%',
  },
 
});

export default styles;
