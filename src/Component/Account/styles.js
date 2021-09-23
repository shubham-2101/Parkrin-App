import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  
  },
  overlayView:{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor:'#000000', //'#282C3FB2',
    justifyContent:'space-between',
    flexDirection:'column',
   
  },
  formViewLogin:{
    height:hp("70%"),
    alignItems:'center',
    backgroundColor:'transparent'
   
    
    
  },
  bottomViewLogin:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('5%')
  },
  botView:{
    height:hp('5%'),
    
    marginVertical:hp('1%'),
    alignItems:'center',
    justifyContent:'center'
  },

 

  bottomView:{
    position: 'absolute',
    height:hp("50%"),
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent:'center',
    alignItems:'center',
   
    
    
  },
  
  termMsg:{ 
    width:wp('90%'),
    fontSize:hp('2%'),
    color:'#fff',
    textAlign:'center',
    paddingTop:hp('3%')
    
  },
  fromHeading:{
    height:hp('20%'),
    alignItems:'center',
    justifyContent:'flex-end',
    
  },
  socialLogin:{
    flexDirection:'row',
    backgroundColor:'#fff',
    height:hp('4.5%'),
    width:wp('55%'),
    borderRadius:8,

  },
  socialIcon:{
    width:'50%',
    alignItems:'center',
   
  },
  forgetPassword:{
    color:'#fff',
    fontSize:hp('2.2%'),
  
    textAlign:'center',
    width:wp('80%')
  },
  newAlredyText:{
    color:'#FFDE6D',
    fontSize:hp('2.2%'),
   
  },
  checkBoxView:{
    flexDirection:'row',
    width:wp('80%'),
    borderColor:'red'
  },
  checkBox:{
    backgroundColor:'#fff',
    borderRadius:5,
    marginTop:hp('1.5%'),
   
  },
  checkBoxChecked:{
    backgroundColor:'#FF9F09',
    borderRadius:5,
    marginTop:hp('1.5%'),
   
  },

  termAcceptText:{
    color:'#fff',
    fontSize:hp('2.2%'),
    paddingTop:hp('1.5%'),
    paddingLeft:20
  },
  emailLabel:{
    color:'#fff',
    fontSize:hp('2.2%'),
    paddingTop:hp('1.5%'),
    width:wp('80%')
  },
  resendView:{
    height:hp('8%'),
    alignItems:'center',
    justifyContent:'center',
    marginTop:hp('2%')
  }
 
});

export default styles;
