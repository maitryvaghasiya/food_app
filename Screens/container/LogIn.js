import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function LogIn({ navigation }) {

    const [phone, onChangePhone] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const dispatch = useDispatch();

    // const auth = useSelector(state => state.user)

    const handleSignIn = () => {
        dispatch(signinUser({ phone, password }))
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}>
                    <Image style={styles.image} source={require("../../assets/image/login1.png")} />
                </View>
                <View style={{ marginBottom: 30, alignItems: "center" }}>
                    <Text style={{ color: "black", fontSize: 22, fontWeight: "600" }}>Log in to your account</Text>
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

                <View style={{ flexDirection: "row" }}>
                    <Entypo name={'mobile'} style={styles.mobileicon} />
                    {/* <Text style={{ color: colors.secondarytext, fontSize: 16 }}>Full Name</Text> */}
                    <TextInput
                        style={styles.inputView}
                        placeholder="Mobile Number"
                        placeholderTextColor="#6B7280"
                        onChangeText={onChangePhone}
                        value={phone}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Entypo name={'lock'} style={styles.mobileicon} />
                    {/* <Text style={{ color: colors.secondarytext, fontSize: 16 }}>Email Address</Text> */}
                    <TextInput
                        style={styles.inputView1}
                        placeholder="Password"
                        placeholderTextColor="#6B7280"
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("ForgetPass")}>
                    <Text style={{ color: colors.primary, textAlign: "right", marginBottom: 40 }}>Forget Password?</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' ,alignItems:"center",justifyContent:"center",marginBottom:20}}>
                    <View style={{ borderWidth: 0.5, borderColor: colors.secondarytext, width: "30%" }}></View>
                    <View>
                        <Text style={{ textAlign: "center", color: colors.secondarytext, fontSize: 14 ,marginRight:5,marginLeft:5}}>OR</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: colors.secondarytext, width: "30%" }}></View>
                </View>
                <View>

                    <TouchableOpacity>
                        <AntDesign name={'google'} style={styles.google} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() =>{navigation.navigate("mainscreen"); handleSignIn} }>
                        {/* onPress={() => handleSignIn()} */}
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center", marginTop: 10, flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ marginRight: 5, color: "#6B7280" }}>Don't have an Account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Welcome")}><Text style={{ color: colors.primary, textDecorationLine: 'underline', fontSize: 15 }}>Sign Up</Text></TouchableOpacity>

                </View>

                {/* <TouchableOpacity style={styles.loginBtn} onPress={() => handleSignup()}>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity> */}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F4F6F7",
        // margin: 18

    },
    container: {
        flex: 1,
        backgroundColor: "#F4F6F7",
        margin: 18
        // alignItems: "center",
        // justifyContent: "center",
    },
    image: {
        marginTop: 20,
        marginBottom: 40,
        height: 250,
        width: 250,
        alignItems: "center"

    },
    inputView: {
        // backgroundColor: "#F1F3F3",
        // borderRadius: 30,
        width: "90%",
        height: 45,
        // marginBottom: 20,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: colors.secondarytext,
        marginBottom: 20
    },
    inputView1: {
        // backgroundColor: "#F1F3F3",
        // borderRadius: 30,
        width: "90%",
        height: 45,
        // marginBottom: 20,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: colors.secondarytext,
        marginBottom:10
    },
    TextInput: {
        // height: 50,
        flex: 1,
        // padding: 10,
        // marginLeft: 20,
        color: "black"
    },

    loginBtn: {
        width: "70%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        //   marginTop: 70,
        backgroundColor: "#106733",
        marginTop: 30,
        borderRadius: 10,
        // padding: 10,
        elevation: 2,
        marginBottom: 10
    },
    loginText: {
        fontWeight: "700",
        letterSpacing: 2,
        color: "white",
        fontSize: 16
    },
    mobileicon: {
        fontSize: 20,
        top: 20,
        paddingRight: 5,
        color: colors.secondarytext
    },
    google: {
        fontSize: 40,
        top: 20,
        paddingRight: 5,
        color: colors.secondarytext,
        textAlign: "center",
        marginBottom: 30
    }
});