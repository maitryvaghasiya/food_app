import { Text, View } from 'react-native'
import React, { Component,useRef } from 'react'
import OtpInputs from 'react-native-otp-inputs';

export default class Otp extends Component {
    clearText = () => {
        this.otpInput.clear();
    }
    
    setText = () => {
        this.otpInput.setValue("1234");
    }
  render() {
    return (
        <View style={styles.container}>
          <OtpInputs
            handleChange={(code) => console.log(code)}
            numberOfInputs={6}
          />
        </View>
      );
  }
}