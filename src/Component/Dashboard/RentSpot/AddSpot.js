import * as React from 'react';
import { Text, View, StyleSheet,Image,ScrollView,TouchableOpacity,ActivityIndicator } from 'react-native';;
import { connect } from "react-redux";
import {PHOTO} from '../../../Utils/Api_url'
import { MaterialCommunityIcons  } from '@expo/vector-icons'; 
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import CustomeTextInput from '../../CommonComponent/CustomeTextInput'
  import ButtonView from "../../CommonComponent/ButtonView";

  import {adddSpot} from './spotfunction'

  

 class AddSpot extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
     spot:{spot_name:'',spot_time_type:'Hour',vehicle_type:'Cars',no_of_spots:0,address:'',spot_price:0},
     errorData:{spot_name_error:undefined,vehicle_type_error:undefined,spot_price_error:undefined,no_of_spots_error:undefined,address_error:undefined},
     isLoading:false
    };
  }

  onChange=(text,name,errorname)=>{
    this.setState({ 
              spot: { ...this.state.spot, [name]: text, },
              errorData: { ...this.state.errorData, [errorname]: undefined, }, 
             
             })
    }

  render() {
      console.log(this.state)
   
      return (
        <View style={styles.container}>
          <ScrollView>
         
         <Text style={styles.label}>Spot Name:</Text>
         <CustomeTextInput  type={"text"} placeholder={"Spot Name"} value={this.state.spot.spot_name} name={'spot_name'}  errorname={"spot_name_error"} errorMsg={this.state.errorData.spot_name_error}  changeEvent={this.onChange}/>
         <Text style={styles.label}>Vehicle Type:</Text>
         <CustomeTextInput  type={"text"} placeholder={"Vehicle Type"} value={this.state.spot.vehicle_type} name={'vehicle_type'}  errorname={"vehicle_type_error"} errorMsg={this.state.errorData.vehicle_type_error} changeEvent={this.onChange}/>
         <Text style={styles.label}>Spot charge per hour ( in $ ):</Text>
         <CustomeTextInput  type={"number"} placeholder={"Spot charge"} value={this.state.spot.spot_price} name={'spot_price'}   errorname={"spot_price_error"} errorMsg={this.state.errorData.spot_price_error} changeEvent={this.onChange}/>
         <Text style={styles.label}>No of spot:</Text>
         <CustomeTextInput  type={"number"} placeholder={"No of spot"} value={this.state.spot.no_of_spots} name={'no_of_spots'}   errorname={"no_of_spots_error"} errorMsg={this.state.errorData.no_of_spots_error}   changeEvent={this.onChange}/>
         <Text style={styles.label}>Address:</Text>
         <CustomeTextInput  type={"text"} placeholder={"Address"} value={this.state.spot.address} name={'address'}  errorname={"address_error"} errorMsg={this.state.errorData.address_error}  changeEvent={this.onChange}/>
         
         {this.state.isLoading?
          (<ActivityIndicator style={{paddingTop:30}} size="large" color="#fff"/>)
          :
            (<ButtonView
                  buttonText={"Add"}
                  eventFunction={() => adddSpot(this)}
                  buttonColor={"#FF9F09"}
                
                />)
            }
         </ScrollView>
        </View>
      );
   
  }
}

const mapStateToProps = (state) => {
    return {
      user:state.UserInfo
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addUser: (user) =>
        dispatch({
          type: 'SET_USER',
          payload: user,
        }),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddSpot);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222628',
    paddingHorizontal:wp('10%'),
    paddingVertical:hp('5%')
  },
  profileImage:{
      width:wp('50%'),
      height:wp('50%'),
      alignSelf:'center',
      borderRadius:wp('25%')
  },
  label:{
      fontSize:hp('2.2%'),
      color:'#FF9F09',
      paddingTop:hp('1%')
  },
  textVal:{
     fontFamily: 'WorkSans', 
     fontSize: hp('3%') ,
     color:'#fff',
     paddingHorizontal:wp('1%'),
     
  },
  editIcon:{
      alignSelf:'flex-end',
      height:wp('10%'),
      marginRight:wp('6%')

  },
  imageView:{
    width:wp('53%'),
    height:wp('50%'),
    alignSelf:'center'
  }
});
