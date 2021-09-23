import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import {connect} from 'react-redux';
import { FontAwesome5,AntDesign,MaterialCommunityIcons   } from '@expo/vector-icons'; 
import {checkLocationPermission,clearCheckDistanceInterval} from './localFunction'

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this._intervalBooking;
  }


  componentDidMount() {
    checkLocationPermission(this);
    // this._unsubscribe = this.props.navigation.addListener("focus", () => {
    //   checkLocationPermission(this);
    // });
  }
  componentWillUnmount() {
    console.log("hhhhfhfh")
    clearCheckDistanceInterval(this)
  }


  render() {
    
     console.log(this.props.booking)
      return (
        <View style={styles.container}>
          {this.props.booking?
            <View style={styles.cardView}>
                    <Text style={styles.cardHeading}>Booking Successful</Text>
                    <Text style={styles.bookingCode}>ID:  {this.props.booking.booking_code}</Text>
                    <View style={styles.borderView}/>
                    <Text style={styles.slotname}>{this.props.booking.spotInfo.spot_name}</Text>
                            <View style={styles.rows}>
                                <FontAwesome5 name="map-marker-alt" size={15} color="#fff" />
                                <Text style={styles.slotText}>{this.props.booking.spotInfo.address}</Text>
                            
                            </View>
                            <View style={styles.rows}>
                                <AntDesign name="calendar" size={15} color="#fff" />
                                <Text style={styles.slotText}>{this.props.booking.hours}</Text>
                            
                            </View>
                            <View style={styles.rows}>
                                <AntDesign name="car" size={15} color="#fff" />
                                <Text style={styles.slotText}>{this.props.booking.booking_status?"In progress":"Complete"} </Text>
                            
                            </View>

                            <View style={styles.butttonRow}>
                            {/* <TouchableOpacity style={styles.bookButton} >
                            <MaterialCommunityIcons name="delete-forever-outline" size={24} color="red" />
                            </TouchableOpacity> */}
                            <TouchableOpacity style={styles.bookButton,styles.bottonBorder} >
                                    <Text style={styles.bottonText}>ok</Text>
                            </TouchableOpacity>
                            </View>

            </View>

          
            :
            null}
        
        </View>
      );
   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
    addBooking: (booking) =>
      dispatch({
        type: "SET_BOOKING",
        payload: booking,
      }),  
  };
};
const mapStateToProps = (state) => {
    return {
      slot: state.Slot,
      booking:state.Booking
    };
  };
  
 
  
  export default connect(mapStateToProps, mapDispatchToProps)(index);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView:{
      width:wp('90%'),
      backgroundColor:'#000000',
      paddingVertical:hp('2%'),
      paddingHorizontal:wp('6%'),
      borderRadius:10
  },
  cardHeading:{
      fontSize:hp('4.5%'),
      color:'#FF9F09',
      fontFamily:'WorkSans'

  },
  bookingCode:{
      color:'#fff',
      fontSize:hp('2.2%'), 
    

  },
  borderView:{
    height:1,
    width:'100%',
    backgroundColor:'#C4C4C4',
    marginVertical:hp('2%')
  },
  slotname:{
    color:'#fff',
    textAlign:'center',
    fontSize:hp('2.2%'),
    fontWeight:'bold',
    paddingTop:hp('1%'),
   },
   rows:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingTop:hp('1%'),
    

   },
   slotText:{
    color:'#fff',
    justifyContent:'flex-start',
    fontSize:hp('2%'),
    width:wp('78%'),
    paddingHorizontal:wp('3.2%'),
   },
   butttonRow:{
       flexDirection:'row',
       
       marginTop:hp('5%'),
       paddingHorizontal:wp('8%')
   },
   
   bookButton:{
    width:wp('40%'),
    paddingHorizontal:wp('6%'),
    marginTop:wp('2.5%'),
    height:hp('3%'),
    justifyContent:'center',
    
   },
   bottonBorder:{
    borderWidth:1,
    borderColor:'#FF9F09',
    paddingHorizontal:wp('4%'),
    justifyContent:'center',
    borderRadius:10,
    marginRight:wp('2%')

},
bottonText:{
    color:'#FF9F09'
   },


});
