import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from "react-native";
import { colors } from "../../assets/colors/colors";
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import { signinUser, signupUser } from "../redux/action/login.action";

export default function LogIn({navigation}) {


// console.log("kjbkjbkjbkj");

const dispatch = useDispatch();
const auth = useSelector(state => state.user)
  // const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  // const Log = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(mail,password)
  //     .then(() => {
  //       console.log('User account created & signed in!');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // }

  const handleSignup = () => {
    console.log({mail, password});
    dispatch(signupUser({mail, password}))
  }

  const handleSignIn = () => {
    dispatch(signinUser({mail, password}))
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/image/flogo.png")} />
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: "black", fontSize: 26, fontWeight: "600" }}>Sign in to your account</Text>
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text style={{ color: colors.secondarytext, fontSize: 18, textAlign: "center" }}>We'll send you a verification code to help us keep your account safe.</Text>
      </View>

      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText={(phone) => setPhone(phone)}
          keyboardType={'phone-pad'}
        />
      </View> */}

<View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter MAil"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setMail(text)}
          // keyboardType={'phone-pad'}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
          // keyboardType={'phone-pad'}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>handleSignIn()}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={()=>handleSignup()}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    marginTop: 100,
    marginBottom: 40,
    height: 100,
    width: 100

  },
  inputView: {
    backgroundColor: "#F1F3F3",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 20,
    color: "black"
  },

  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    //   marginTop: 70,
    backgroundColor: "#32B768",
    marginBottom:10
  },
  loginText: {
    fontWeight: "700",
    letterSpacing: 2,
    color: "white",
    fontSize: 16
  }
});