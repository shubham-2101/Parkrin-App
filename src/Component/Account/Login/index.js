import * as React from "react";
import { Text, View,ImageBackground, TouchableOpacity,Image,ActivityIndicator } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import styles from '../styles'
import CustomeTextInput from '../../CommonComponent/CustomeTextInput'
import ButtonView from "../../CommonComponent/ButtonView";
import {screnNavigation,submitSignInForm} from '../AccountFunction'
import Header from '../Modules/Header'
class index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: { email: "",password:"", },
      errorData:{emailError:undefined},
      isLoading:false,
    };
 
  }

  onChange=(text,name,errorname)=>{
   this.setState({ 
              formData: { ...this.state.formData, [name]: text, },
              errorData: { ...this.state.errorData, [errorname]: undefined, }, 
            })
   }


  render() {
    
    return (
      <ImageBackground style={styles.container} source={require("../../../../assets/images/Splash/background.png")}>
        <View style={styles.overlayView}>
        <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === 'ios'}
        style={{backgroundColor: 'transparent'}}>
        <Header heading={"Login"} />
        <View style={styles.formViewLogin}>
          <CustomeTextInput  type={"text"} placeholder={"Email"} value={this.state.formData.email} name={'email'}  errorname={"emailError"} errorMsg={this.state.errorData.emailError} changeEvent={this.onChange}/>
          <CustomeTextInput type={"password"} placeholder={"Password"} value={this.state.formData.password} name={'password'}  errorname={"passwordError"} errorMsg={this.state.errorData.passwordError} changeEvent={this.onChange} />
       
       {this.state.isLoading?
       (<ActivityIndicator style={{paddingTop:30}} size="large" color="#fff"/>)
       :
        (<ButtonView
              buttonText={"login"}
              eventFunction={() => submitSignInForm(this)}
              buttonColor={"#3F2E00"}
            
            />)
        }


             
{     !this.state.isLoading?
      
      <View style={styles.bottomViewLogin}>
        <View style={styles.socialLogin}>
         <TouchableOpacity style={[styles.socialIcon,{backgroundColor:'#C2DCE8',borderTopLeftRadius:8,borderBottomLeftRadius:8}]} onPress={()=>alert('google')}><Image  style={{height:'100%',width:'30%'}}source={require('../../../../assets/images/icons/Google.png')}  /></TouchableOpacity>
         <TouchableOpacity style={styles.socialIcon}  onPress={()=>alert('facebook')}><Image  style={{height:'100%',width:'35%'}}source={require('../../../../assets/images/icons/Facebook.png')} /></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>screnNavigation(this.props.navigation,"Forget")} style={styles.botView} ><Text style={styles.forgetPassword}>Forgot your password?</Text></TouchableOpacity>
       
        <TouchableOpacity onPress={()=>screnNavigation(this.props.navigation,"Signup")} style={styles.botView}><Text style={styles.newAlredyText} >New User? Signup</Text></TouchableOpacity>
      
      </View>
      :
      null}
        </View>
        
        
      </KeyboardAwareScrollView>
        </View>
        
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) =>
      dispatch({
        type: 'SET_USER',
        payload: user,
      }),
  };
};

export default connect(null, mapDispatchToProps)(index);
