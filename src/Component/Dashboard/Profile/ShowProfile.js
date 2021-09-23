import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';;
import { connect } from "react-redux";
import {PHOTO} from '../../../Utils/Api_url'
import { AntDesign } from '@expo/vector-icons'; 
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
 class ShowProfile extends React.Component {
 


  

  render() {
      
   
      return (
        <View style={styles.container}>
         <AntDesign name="edit" size={24} color="#fff" style={styles.editIcon} onPress={()=>this.props.navigation.navigate('EditProfile')}/>
         <Image  source={{uri:PHOTO.url + this.props.user.user_image}}  style={styles.profileImage}/>
         <Text style={styles.label}>First name:</Text>
         <Text style={styles.textVal}>{this.props.user.first_name}</Text>
         <Text style={styles.label}>Last name:</Text>
         <Text style={styles.textVal}>{this.props.user.last_name}</Text>
         {/* <Text style={styles.label}>Vehicle Name:</Text>
         <Text style={styles.textVal}>{this.props.user[0].vehicle_name.length>0?this.props.user[0].vehicle_name:"......................."}</Text>
         <Text style={styles.label}>Vehicle No:</Text>
         <Text style={styles.textVal}>{this.props.user[0].vehicle_number.length>0?this.props.user[0].vehicle_number:"......................."}</Text> */}


        
        </View>
      );
   
  }
}

const mapStateToProps = (state) => {
    return {
      user:state.UserInfo
    };
  };
  


export default connect(mapStateToProps, null)(ShowProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222628',
    paddingHorizontal:wp('10%'),
    paddingVertical:hp('10%')
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
      paddingTop:hp('3%')
  },
  textVal:{
     fontFamily: 'WorkSans', 
     fontSize: hp('3%') ,
     color:'#fff',
     paddingHorizontal:wp('1%'),
     
  },
  editIcon:{
      alignSelf:'flex-end'
  }
});
