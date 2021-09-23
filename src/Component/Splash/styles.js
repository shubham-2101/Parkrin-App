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
    backgroundColor: '#282C3FB2',
    justifyContent:'space-between',
    flexDirection:'column'
   
  },
 
  bottomView:{
    position: 'absolute',
    height:hp("40%"),
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:16,
    borderTopRightRadius:16
    
  },
  welcomeText:{
  color:'#FF9F09',
  fontFamily:'WorkSans',
  fontSize:hp('5%'),
  fontWeight:'800'
  },
  welcomeMsg:{
    textAlign:'center',
    width:wp('80%'),
    fontSize:hp('2.2%'),
    color:'#666666',
    paddingTop:20
  },
  skipText:{
    color:'#FF9F09',
    fontFamily:'WorkSans',
    fontSize:hp('2.5%'),
    fontWeight:'bold',
    paddingTop:20

    },
  into1Head:{
    width:wp('80%'),
    color:'#FF9F09',
    fontFamily:'WorkSans',
    fontSize:hp('4%'),
    fontWeight:'800'
  },
  introMsg:{
   
    width:wp('80%'),
    fontSize:hp('2.5%'),
    color:'#fff',
    
  },
  nextButton:{
    backgroundColor:'#FF9F09',
    justifyContent:'center',
    alignItems:'center',
    height:hp('5%'),
    width:wp('30%'),
    borderRadius:10
  },
  buttonText:{
    color:'#fff'
  },
  lowerView:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:wp('80%'),
    height:hp('18%'),
    paddingTop:hp('3%'),
  }
 
});

export default styles;
