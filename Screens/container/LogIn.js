import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'


export default function LogIn({ navigation }) {
    const [name, onChangeText] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const dispatch = useDispatch();
    const handleSignIn = () => {
        dispatch(signinUser({ email, password }))
    }
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                    <Image style={styles.image} source={require("../../assets/image/login1.png")} />
                </View>
                <View style={{ marginBottom: 20, alignItems: "center" }}>
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

                <View style={{flexDirection:"row"}}>
                <Entypo name={'mobile'} style={styles.mobileicon}/>
                    {/* <Text style={{ color: colors.secondarytext, fontSize: 16 }}>Full Name</Text> */}
                    <TextInput
                        style={styles.inputView}
                        placeholder="Mobile Number OR Email Id"
                        placeholderTextColor="#6B7280"
                        onChangeText={onChangeEmail}
                        value={email}
                    />
                </View>
                <View style={{flexDirection:"row"}}>
                <Entypo name={'lock'} style={styles.mobileicon}/>
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
                <TouchableOpacity >
                    <Text style={{ color: colors.primary, textAlign: "right",marginBottom:20 }}>Forget Password?</Text>
                </TouchableOpacity>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => handleSignIn()}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center", marginTop: 10 ,flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{marginRight:5,color:"#6B7280"}}>Don't have an Account?</Text>
                        <TouchableOpacity><Text style={{ color: colors.primary, textDecorationLine: 'underline', fontSize:15 }}>Sign Up</Text></TouchableOpacity>
                    
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
        borderRadius: 30,
        width: "90%",
        height: 45,
        // marginBottom: 20,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: colors.secondarytext,
        marginBottom:20
    },
    inputView1: {
        // backgroundColor: "#F1F3F3",
        borderRadius: 30,
        width: "90%",
        height: 45,
        // marginBottom: 20,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: colors.secondarytext,
        // marginBottom:20
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
        marginBottom:10
    },
    loginText: {
        fontWeight: "700",
        letterSpacing: 2,
        color: "white",
        fontSize: 16
    },
    mobileicon:{
        fontSize:20,
        top:20,
        paddingRight:5,
        color:colors.secondarytext
    }
});