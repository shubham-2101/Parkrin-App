import * as React from "react";
import { Text, View,ImageBackground, TouchableOpacity,Image,ActivityIndicator } from "react-native";
import {  CheckBox } from 'native-base';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from '../styles'
import CustomeTextInput from '../../CommonComponent/CustomeTextInput'
import ButtonView from "../../CommonComponent/ButtonView";
import {screnNavigation,submitSignUpForm} from '../AccountFunction'
import Header from '../Modules/Header'


class index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: { email: "",password:"", first_name:"",last_name:"",},
      errorData:{emailError:undefined,firstNameError:undefined,lastNameError:undefined,passwordError:undefined},
      isLoading:false,
      checked:true
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
        <Header heading={"Signup"} />
        <View style={styles.formViewLogin}>
        <CustomeTextInput  type={"text"} placeholder={"First name"} value={this.state.formData.first_name} name={'first_name'}  errorname={"firstNameError"} errorMsg={this.state.errorData.firstNameError} changeEvent={this.onChange}/>
        <CustomeTextInput  type={"text"} placeholder={"Last name"} value={this.state.formData.last_name} name={'last_name'}  errorname={"lastNameError"} errorMsg={this.state.errorData.lastNameError} changeEvent={this.onChange}/>
        <CustomeTextInput  type={"text"} placeholder={"Email"} value={this.state.formData.email} name={'email'}  errorname={"emailError"} errorMsg={this.state.errorData.emailError} changeEvent={this.onChange}/>
        <CustomeTextInput type={"password"} placeholder={"Password"} value={this.state.formData.password} name={'password'}  errorname={"passwordError"} errorMsg={this.state.errorData.passwordError} changeEvent={this.onChange} />
        <View style={styles.checkBoxView}>
              <CheckBox checked={this.state.checked} color="#fff"  style={this.state.checked?styles.checkBoxChecked:styles.checkBox} onPress={()=>this.setState({checked:!this.state.checked})}/>
              <Text style={styles.termAcceptText}>I accept all the terms and conditions.</Text>
        </View>    
       {this.state.isLoading?
       (<ActivityIndicator style={{paddingTop:30}} size="large" color="#fff"/>)
       :
        (<ButtonView
              buttonText={"Sign up"}
              eventFunction={() => submitSignUpForm(this)}
              buttonColor={"#3F2E00"}
            
            />)
        }




        {!this.state.isLoading?
      
        <View style={styles.bottomViewLogin}>
          <TouchableOpacity onPress={()=>screnNavigation(this.props.navigation,"Login")} style={styles.botView}><Text style={styles.newAlredyText}>{`Already have an account? `}<Text style={{ textDecorationLine: 'underline'}}>{`Login`}</Text></Text></TouchableOpacity>
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
