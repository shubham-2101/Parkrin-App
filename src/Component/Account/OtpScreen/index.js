import * as React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "../styles";
import CustomeTextInput from "../../CommonComponent/CustomeTextInput";
import ButtonView from "../../CommonComponent/ButtonView";
import OtpInput from '../Modules/OtpInput'

import { screnNavigation, submitForm } from "../AccountFunction";
import Header from "../Modules/Header";
export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { otp:'' },
      errorData: { emailError: undefined },
      isLoading: false,
    };
  }

  onChange = (text) => {
    this.setState({
      formData: { ...this.state.formData, otp: text },
    });
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../../../assets/images/Splash/background.png")}
      >
        <View style={styles.overlayView}>
          <Header heading={"Otp"} />
          <View style={styles.formViewLogin}>
            <Text style={styles.forgetPassword}>
              {`Enter the code send to your registered email: sar******@gmai.com`}{" "}
            </Text>
            <OtpInput getOtp={(otp) => this.onChange(otp)} />

            {this.state.isLoading ? (
              <ActivityIndicator
                style={{ paddingTop: 30 }}
                size="large"
                color="#fff"
              />
            ) : (
              <>
                <ButtonView
                  buttonText={"CONFIRM OTP"}
                  eventFunction={() => submitForm(this)}
                  buttonColor={"#FF9F09"}
                />
                <TouchableOpacity style={styles.resendView}>
                  <Text style={styles.forgetPassword}>Send a new code ? </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </ImageBackground>
    );
  }
}
