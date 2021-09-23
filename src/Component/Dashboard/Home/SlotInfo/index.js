import  React,{useState,useEffect} from "react";
import { StyleSheet,Text, View, ImageBackground, TouchableOpacity,Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { FontAwesome5,  } from '@expo/vector-icons'; 
import {connect} from 'react-redux';
import moment from 'moment'
import {paySpot} from '../homeScreenfunction'
import { Ionicons  } from "@expo/vector-icons";
import {backBottom } from '../homeScreenfunction'


 class index extends React.Component{
 
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
    };
  }


 

  render(){
   
    const{slot}=this.props
    return (
    
        
          <View style={[styles.container]}>
             <View style={styles.header}>
                <View style={styles.headerTop} />
                    <Ionicons name="arrow-back" size={24} color="#fff"  style={{position:'absolute',top:hp('2%'),left:wp('5%')}} onPress={()=>backBottom(this.props.thatObj,this.props.type)}/>
                    <Text style={styles.headingTitle}>Pay</Text>
                </View>
            <Text style={styles.slotName}>{`${slot[0].spot_name}`}</Text>
            <View style={styles.addressRow}>
            <FontAwesome5 name="map-marker-alt" size={12} color="#fff" />
            <Text numberOfLines={1} style={styles.slotAddress}>{`${slot[0].address}`}</Text>
            </View>
            <View style={[styles.addressRow]}>
               <Image source={require('../../../../../assets/images/icons/position.png')}/>
               <Text style={styles.noOfSlot}>{`${slot[0].no_of_spots}`} Spots left</Text>
            </View>
            <View style={[styles.Row]}>
               <Text style={styles.noOfSlot}>Booking Date and Time</Text>
               <View style={styles.innerView}>
               <Text style={styles.noOfSlot}>{`${moment(slot[0].startTime).format(" ddd MMMM Do")} ${moment(slot[0].startTime).format("h:mm a")} - ${moment(slot[0].endTime).format("h:mm a")}`}</Text>
               </View>
            </View>

            <View style={[styles.Row]}>
               <Text style={styles.noOfSlot}>Car Details</Text>
               <View style={styles.innerView}>
               <Text style={styles.noOfSlot}>Kia Seltos - Dl02-AC-1234 </Text>
               </View>
            </View>

            <View style={[styles.RowBottom]}>
                <View>
                <Text style={styles.noOfSlot}>INR-{`${slot[0].amount}.00`}</Text>
                <Text style={styles.slotPer}>INR {`${slot[0].spot_price}`} Per Hour</Text>
                </View>
            
               <TouchableOpacity style={styles.bottonView} onPress={()=>paySpot(this)}>
               <Text style={styles.noOfSlot}>Pay </Text>
               </TouchableOpacity>
            </View>

           
           
          </View>
       
      
    );
    }
 }



const mapStateToProps = (state) => {
  return {
    slot: state.Slot,
 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSlot: (slot) =>
      dispatch({
        type: 'SET_SLOT',
        payload: slot,
      }),

    addBooking: (booking) =>
      dispatch({
        type: 'SET_BOOKING',
        payload: booking,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);

const styles = StyleSheet.create({
  container: {
  
    height: hp("45%"),
    alignItems: "center",
  },
 
 
  bottomView:{
    position: 'absolute',
    height:hp("45%"),
    
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#222628',
    borderTopLeftRadius:16,
    borderTopRightRadius:16
    
  },
  slotName:{
  color:'#fff',
  fontFamily:'WorkSans',
  fontSize:hp('2.4%'),
  
  },
  addressRow:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  slotAddress:{
    color:'#fff',
    fontFamily:'WorkSans',
    fontSize:hp('2.2%'),
    paddingLeft:wp('2%'),
    width:wp('60%')
  },
  noOfSlot:{
    color:'#ffe6f7',
    fontSize:hp('2%'),
    paddingLeft:5
  },
  Row:{
    width:wp('80%'),
   paddingTop:hp('1%')
  },
  innerView:{
    backgroundColor:'#000000',
    height:hp('4%'),
    marginVertical:hp('1%'),
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  RowBottom:{
    width:wp('80%'),
    paddingTop:hp('1%'),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  bottonView:{
    backgroundColor:'#3F2E00',
    width:wp('20%'),
    height:hp('5%'),
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  slotPer:{
    color:'#FF9F09',
    fontSize:hp('2%'),
    paddingLeft:5
  },
  header: {
    width:wp('100%'),
    flexDirection: "column",
    height: hp("8%"),
    backgroundColor: "#222628",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headingTitle: {
    color: "#fff",
    fontSize: hp("2.5%"),
    paddingTop: hp("1%"),
  },
  headerTop: {
    width: wp("10%"),
    height: 1,
    backgroundColor: "#fff",
    position: "absolute",
    top: hp("2%"),
  }

 
});

   {/* {this.state.botomSheetType == "Spot" ? (
          <BottomSheet
            headerTiltle={this.state.bottomSheetTitle}
            child={this.MySubComponent()}
            type={this.state.botomSheetType}
            backEvent={this.backEvent}
            fabEvent={this.fabEvent}
          />
        ) : (
          <View style={styles.bottomView}>
            <SlotInfo type={this.state.botomSheetType} thatObj={this} />
          </View>
        )} */}