import * as React from 'react';
import { Text, View, StyleSheet ,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import Heading from '../Modules/Heading'
import UpComingCard from './UpComingCard'
import PastBookingCard from './PastBookingCard'
import LoadingModal from '../../../Utils/LoadingModal'
import {getBookingList} from './bookingfuction'
import { connect } from "react-redux";
class BookingList extends React.Component {
  
  constructor(props) {
    super(props);
    this._unsubscribe;
    this.state = {
      bookingList: [],
      botomSheetType: "Spot",
      selectedSlot: null,
      tabIndex:'Upcoming',
      isLoading:false
    };
  }

   
  componentDidMount() {
    //getBookingList(this,this.state.tabIndex)
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      getBookingList(this,this.state.tabIndex)
    });
  }

  upcomingView = ({ item }) => {

    return (
         <UpComingCard  booking={item} thisObj={this}/>
    );
  };

  pastView = ({ item }) => {

    return (
         <PastBookingCard booking={item} thisObj={this} />
    );
  };

  changeTab=(type)=>{
    console.log("djfavjgfuvufuvgyufgvuyg")
    this.setState({...this.state,tabIndex:type,bookingList: []})
    getBookingList(this,type)
  }




  render() {
    // Use the font with the fontFamily property after loading
   
      return (
        <>
        <Heading heading={'My Bookings'}/>
        <View style={styles.tabView}>
         {/* <TouchableOpacity style={this.state.tabIndex=="Upcoming"?styles.activeTab:''} onPress={()=>this.changeTab("Upcoming")}>
           <Text  style={[styles.tabViewText,this.state.tabIndex==0?{color:'#FF9F09',}:{color:'#fff',}]}>Upcoming</Text>
           
         </TouchableOpacity>


         <TouchableOpacity style={this.state.tabIndex=="Past"?styles.activeTab:''} onPress={()=>this.changeTab("Past")}>
           <Text style={[styles.tabViewText,this.state.tabIndex==1?{color:'#FF9F09',}:{color:'#fff',}]}>Past</Text>
         </TouchableOpacity> */}


        </View>
        <View style={styles.container}>
        <FlatList
                  data={this.state.bookingList}
                  renderItem={this.pastView}
                  keyExtractor={(item, index) => index.toString()}
                />
          {/* {this.state.tabIndex=='Upcoming'?
                <FlatList
                  data={this.state.bookingList}
                  renderItem={this.upcomingView}
                  keyExtractor={(item, index) => index.toString()}
                />
                :
                  <FlatList
                  data={this.state.bookingList}
                  renderItem={this.pastView}
                  keyExtractor={(item, index) => index.toString()}
                />
          }
        */}
          
        
        </View>
        <LoadingModal visible={this.state.isLoading} />
        </>
      );
   
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addBooking: (booking) =>
      dispatch({
        type: 'SET_BOOKING',
        payload: booking,
      }),
  };
};

export default connect(null, mapDispatchToProps)(BookingList);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222628',
    alignItems: 'center',
  },
  tabView:{
    flexDirection:'row',
    height:hp('8%'),
    alignItems:'center',
    paddingHorizontal:wp('3%'),
    backgroundColor: '#222628',
   
    
  },
  tabViewText:{
   paddingHorizontal:wp('4%'),
   fontSize:hp('2.2%'),
   paddingBottom:hp('2%')
  },
  activeTab:{
    borderBottomWidth:1,
    borderBottomColor:'#FF9F09'
  }
  
});
