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

  import {selectImage,uploadImage,updateProfile} from './profiefunction'

 class EditProfile extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
     imageData:null,
     user:{user_name:'',vehicle_name:'',vehicle_number:'',phone_number:'',user_image:''},
     isLoading:false
    };
  }

  onChange=(text,name,errorname)=>{
    this.setState({ 
              user: { ...this.state.user, [name]: text, },
             
             })
    }

  render() {
      console.log(this.state)
   
      return (
        <View style={styles.container}>
          <ScrollView>
         
         {this.state.imageData==null?
         <>
          <Image  source={{uri:PHOTO.url + this.props.user.user_image}}  style={styles.profileImage}/>
          <TouchableOpacity style={styles.editIcon} onPress={()=>selectImage(this)}><MaterialCommunityIcons  name="camera-plus" size={24} color="#fff" /></TouchableOpacity>
          </>:
           <>
           <Image  source={{uri:this.state.imageData}}  style={styles.profileImage}/>
           {this.state.isLoading?
          (<ActivityIndicator style={{paddingTop:30}} size="large" color="#fff"/>)
          :
           <TouchableOpacity style={styles.editIcon} onPress={()=>uploadImage(this)}><MaterialCommunityIcons  name="check" size={24} color="#fff" /></TouchableOpacity>
           }
           </>
          }
         
         <Text style={styles.label}>Name:</Text>
         <CustomeTextInput  type={"text"} placeholder={"Name"} value={this.state.user.user_name} name={'user_name'}   changeEvent={this.onChange}/>
         <Text style={styles.label}>Vehicle Name:</Text>
         <CustomeTextInput  type={"text"} placeholder={"Vehicle name"} value={this.state.user.vehicle_name} name={'vehicle_name'}   changeEvent={this.onChange}/>
         <Text style={styles.label}>Vehicle No:</Text>
         <CustomeTextInput  type={"text"} placeholder={"Vehicle number"} value={this.state.user.vehicle_number} name={'vehicle_number'}   changeEvent={this.onChange}/>
         <Text style={styles.label}>Mobile No:</Text>
         <CustomeTextInput  type={"number"} placeholder={"Phone number"} value={this.state.user.phone_number} name={'phone_number'}   changeEvent={this.onChange}/>
         
         {this.state.isLoading?
          (<ActivityIndicator style={{paddingTop:30}} size="large" color="#fff"/>)
          :
            (<ButtonView
                  buttonText={"Update"}
                  eventFunction={() => updateProfile(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

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
