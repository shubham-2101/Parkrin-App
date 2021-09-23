import  React from "react";
import { Text, View, Image, TouchableOpacity,StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { bookSlot } from "../homeScreenfunction";
export default function index({spot,bookEvent}) {
   

 return (

    <View style={styles.cardView}>
        <View style={styles.rows}>
            <Text style={styles.slotname}>{spot.spot_name}</Text>
            <Text style={styles.slotprice}>INR {spot.spot_price}</Text>
         </View>

        <View style={styles.rows}>
            <Text numberOfLines={1} style={styles.slotaddress}>{spot.address}</Text>
            <Text style={styles.slotType}>Per Hour</Text>
        </View>

        <View style={styles.rowsBottom}>
            <View style={styles.subView}>
               <Image source={require('../../../../../assets/images/icons/position.png')}/>
               <Text style={styles.slotDistance}>{`${spot.distance} ${spot.distance<1?'m':'km'}`}</Text>
            </View>
            <View style={[styles.subView,{paddingLeft:10}]}>
               <Image source={require('../../../../../assets/images/icons/position.png')}/>
               <Text style={styles.noOfSlot}>{`${spot.no_of_spots} Spots left`}</Text>
            </View>
            
        </View>
        <TouchableOpacity style={styles.bookButton} onPress={()=>bookEvent(spot)}>
                   <Text style={styles.slotDistance}>Start</Text>
        </TouchableOpacity>

     </View>
    );
    
  
}


const styles = StyleSheet.create({
    cardView:{
        height:hp('22%'),
        width:wp('70%'),
       
        borderWidth:0,
        borderColor:'#fff',
        margin:wp('3%'),
        borderRadius:10,
        backgroundColor:'#000000',
        paddingHorizontal:wp('4%')

    },
    rows:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingTop:hp('2%')

    },
    slotname:{
        color:'#fff',
        justifyContent:'flex-start',
        fontSize:hp('2.2%'),
        fontWeight:'bold'
    },
    slotprice:{
        color:'#FF9F09',
        justifyContent:'flex-end',
        fontSize:hp('2.2%')
    },
    slotaddress:{
        color:'#fff',
        justifyContent:'flex-start',
        fontSize:hp('2%'),
        width:'70%'
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
    slotDistance:{
      color:'#fff',
      fontSize:hp('2%'),
      paddingLeft:5
    },
    noOfSlot:{
        color:'#ffe6f7',
        fontSize:hp('2%'),
        paddingLeft:5
      },
      bookButton:{
          width:wp('30%'),
          backgroundColor:'#3F2E00',
          alignItems:'center',
          alignSelf:'center',
          marginTop:wp('2.5%'),
          borderRadius:10,
          height:hp('3.5%'),
          justifyContent:'center'
      }

  });
  