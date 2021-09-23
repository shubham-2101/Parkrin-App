import * as React from 'react';
import { Text, View, StyleSheet ,FlatList,TouchableOpacity} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import Heading from '../Modules/Heading'
import SpotCard from './SpotCard'
import { Ionicons } from '@expo/vector-icons'; 
import LoadingModal from '../../../Utils/LoadingModal'
import {getSpotList} from './spotfunction'
import { connect } from "react-redux";

class SpotList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      spotList: [],
      isLoading:false
    };
  }

   
  componentDidMount() {
    //getSpotList(this)
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
        getSpotList(this)
    });
  }

  upcomingView = ({ item }) => {

    return (
         <SpotCard  spot={item} thisObj={this}/>
    );
  };

 

  



  render() {
 
   
      return (
        <>
        <Heading heading={'My Spots'}/>
              
          
            <View style={styles.container}>
               <TouchableOpacity style={styles.addIcon} onPress={()=>this.props.navigation.navigate('AddSpot')}><Ionicons name="add-circle" size={35} color="#fff" /></TouchableOpacity>
                {this.state.spotList.length>0?
                <FlatList
                  data={this.state.spotList}
                  renderItem={this.upcomingView}
                  keyExtractor={(item, index) => index.toString()}
                />
               :
                  <View style={styles.infoView}>
                      <Text style={styles.infoText}> No Spot Added </Text>
                  </View>
               }
        
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

export default connect(null, mapDispatchToProps)(SpotList);


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
  },
  infoText:{
      color:'#fff',
      fontSize:hp('3%')
  },
  infoView:{
      flex:1,
      justifyContent:'center'
  },
  addIcon:{
      paddingHorizontal:wp('8%'),
      alignSelf:'flex-end'
  }
  
});
