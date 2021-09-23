import * as React from "react";
import { Text, View,ImageBackground, TouchableOpacity,Image,ActivityIndicator } from "react-native";
import styles from '../styles'
import CustomeTextInput from '../../CommonComponent/CustomeTextInput'
import ButtonView from "../../CommonComponent/ButtonView";
import {screnNavigation,submitForm} from '../AccountFunction'
import Header from '../Modules/Header'
export default class index extends React.Component {

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
        <Header heading={"Forget\n password"} />
        <View style={styles.formViewLogin}>
        <Text style={styles.emailLabel} >Enter your registered Email </Text>
        <CustomeTextInput  type={"text"} placeholder={"Email"} value={this.state.formData.email} name={'email'}  errorname={"emailError"} errorMsg={this.state.errorData.emailError} changeEvent={this.onChange}/>
       
       
       {this.state.isLoading?
       (<ActivityIndicator style={{paddingTop:30}} size="large" color="#fff"/>)
       :
        (<ButtonView
              buttonText={"CONTINUE"}
              eventFunction={() => screnNavigation(this.props.navigation,'Otp')}
              buttonColor={"#3F2E00"}
            
            />)
        }
        </View>
        
        
        
   
        </View>
        
      </ImageBackground>
    );
  }
}

