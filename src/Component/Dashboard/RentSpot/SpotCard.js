import  React from "react";
import { Text, View, Image, TouchableOpacity,StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { FontAwesome5,AntDesign,MaterialCommunityIcons,Ionicons   } from '@expo/vector-icons'; 
import moment from 'moment'
import { FontAwesome } from '@expo/vector-icons'; 


export default function SpotCard({spot,thisObj}) {
 return (

    <View style={styles.cardView}>
        <View style={styles.topView}>
        <Text style={styles.idText}>{spot.spot_name}</Text>
        {/* <Ionicons name="md-navigate-circle-sharp" size={28} color="#FF9F09"  onPress={()=>showRoute(thisObj,booking)}/> */}
        </View>
        <View style={styles.borderView}/>
      
        <View style={styles.rows}>
            <FontAwesome5 name="map-marker-alt" size={15} color="#fff" />
            <Text style={styles.slotText}>{spot.address}</Text>
           
        </View>
        <View style={styles.rows}>
            <FontAwesome name="rupee" size={15} color="#fff" />
            <Text style={styles.slotText}>{spot.spot_price} </Text>
        </View>
        <Text style={styles.idText}>No of Soot <Text style={{color:'#fff'}}> {spot.no_of_spots}</Text></Text>
        {/* <View style={styles.rows}>
        <TouchableOpacity style={styles.bookButton} >
        <MaterialCommunityIcons name="delete-forever-outline" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookButton,styles.bottonBorder} >
                   <Text style={styles.bottonText}>Edit Slot</Text>
        </TouchableOpacity>
        </View> */}
     </View>
    );
    
  
}


const styles = StyleSheet.create({
    cardView:{
        
        width:wp('90%'),
        margin:wp('3%'),
        borderRadius:10,
        backgroundColor:'#000000',
       paddingVertical:hp('2%')

    },
    rows:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingTop:hp('3%'),
        paddingHorizontal:wp('3.2%'),

    },
    idText:{
        paddingHorizontal:wp('3%'),
        color:'#FF9F09',
        justifyContent:'flex-start',
        fontSize:hp('2.2%'),
        fontWeight:'bold',
        paddingTop:hp('1%'),
        width:wp('80%')
    },
    slotname:{
        color:'#fff',
        justifyContent:'flex-start',
        fontSize:hp('2.2%'),
        fontWeight:'bold',
        paddingTop:hp('1%'),
        paddingHorizontal:wp('3%')
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
    color:'#FF9F09'
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
          borderRadius:10,
          height:hp('3%'),
          justifyContent:'center'
      },
      borderView:{
          height:1,
          width:'100%',
          backgroundColor:'#C4C4C4',
          marginTop:hp('1%')
      },
      topView:{flexDirection:'row',width:wp('100%'),}
      

  });
  