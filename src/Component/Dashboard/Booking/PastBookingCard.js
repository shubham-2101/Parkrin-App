import  React from "react";
import { Text, View, Image, TouchableOpacity,StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { FontAwesome5,AntDesign,MaterialCommunityIcons   } from '@expo/vector-icons'; 
import moment from 'moment'

 const PassBookingCard=({booking,thisObj})=> {



    const getHours=()=>{
        let duration = moment.duration(moment(booking.end_time).diff(moment(booking.start_time)));
        let hours = parseInt(duration.asMinutes());
        if(hours>60)
        {
        return hours/60 +'HH :'+hours%60 +' min'
        }
        else{
            return hours +' min'   
        }
    }
 return (

    <View style={styles.cardView}>
        <Text style={styles.slotname}>{`${moment(booking.created_at).format('MMMM Do YYYY')}`}</Text>
        <View style={styles.subCardView}>
               <View style={styles.rows}>
                <Text style={styles.slotname}>{booking.spot_name}</Text>
                <Text style={[styles.slotname,{color:'#FF9F09'}]}>$ {booking.total_amount}</Text>
                </View>
                <View style={styles.rows}>
                    <FontAwesome5 name="map-marker-alt" size={15} color="#fff" />
                    <Text style={styles.slotText}>{booking.address}</Text>
                
                </View>
                <View style={styles.rows}>
                    <AntDesign name="calendar" size={15} color="#fff" />
                    <Text style={styles.slotText}>{getHours()}</Text>
                
                </View>
                {/* <View style={styles.rows}>
                    <AntDesign name="car" size={15} color="#fff" />
                    <Text style={styles.slotText}>Kia Seltos - Dl02-AC-1234 </Text>
                
                </View> */}

                <View style={styles.rows,{ height:hp('6%')}}>
               
                <TouchableOpacity style={styles.bookButton} >
                        <Text style={styles.bottonText}>Re Book</Text>
                </TouchableOpacity>
                </View>
        </View>
     </View>
    );
    
  
}
export default PassBookingCard

const styles = StyleSheet.create({
    cardView:{
        
        width:wp('90%'),
        margin:wp('3%'),
        

    },
    subCardView:{
        backgroundColor:'#141414',
        paddingTop:hp('2%'),
        marginTop:hp('2%'),
        borderRadius:10,
    },
    rows:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingTop:hp('1%'),
        paddingHorizontal:wp('3.2%'),

    },
    idText:{
        paddingHorizontal:wp('3%'),
        color:'#FF9F09',
        justifyContent:'flex-start',
        fontSize:hp('2.2%'),
        fontWeight:'bold',
        paddingTop:hp('1%'),
    },
    slotname:{
        color:'#fff',
        justifyContent:'flex-start',
        fontSize:hp('2.2%'),
        fontWeight:'bold',
        paddingTop:hp('1%'),
        
    },
    slotprice:{
        color:'#FF9F09',
        justifyContent:'flex-end',
        fontSize:hp('2.2%')
    },
    slotText:{
        color:'#fff',
        justifyContent:'flex-start',
        fontSize:hp('2%'),
        width:wp('78%')
    },
    slotType:{
        color:'#fff',
        justifyContent:'flex-end',
        fontSize:hp('2%'),
        
    },
    rowsBottom:{
        width:'90%',
        backgroundColor:'#1D1D1D',
        marginTop:hp('2%'),
        height:hp('4%'),
        flexDirection:'row',
        paddingHorizontal:wp('2%')
    },
    subView:{
        flexDirection:'row',
        alignItems:'center'
    },
   bottonText:{
    color:'#fff'
   },
   bottonBorder:{
       borderWidth:1,
       borderColor:'#FF9F09',
       paddingHorizontal:wp('4%'),
       justifyContent:'center',
       borderRadius:10,
       marginRight:wp('2%')
   },
   
      bookButton:{
          width:wp('30%'),
          alignItems:'center',
          alignSelf:'center',
          marginTop:wp('2.5%'),
          borderTopLeftRadius:10,
          borderBottomRightRadius:10,
          justifyContent:'center',
          backgroundColor:'#FF9F09',
          position:'absolute',
          bottom:0,
          right:0,
          height:hp('6%')
      },
      

  });
  