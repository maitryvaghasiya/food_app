import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../assets/colors/colors'

export default function Otp() {
    const [otp, setOtp] = useState("");
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 10 , marginTop:90}}>
                <Text style={{ color: "black", fontSize: 26, fontWeight: "600" }}>Verify your phone number</Text>
            </View>
            <View style={{ marginBottom: 50 , marginTop:30}}>
                <Text style={{ color: colors.secondarytext, fontSize: 18 }}>Enter your OTP code here</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder=""
                        placeholderTextColor="#003f5c"
                        onChangeText={(otp) => setOtp(otp)}
                        keyboardType={'phone-pad'}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder=""
                        placeholderTextColor="#003f5c"
                        onChangeText={(otp) => setOtp(otp)}
                        keyboardType={'phone-pad'}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder=""
                        placeholderTextColor="#003f5c"
                        onChangeText={(otp) => setOtp(otp)}
                        keyboardType={'phone-pad'}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder=""
                        placeholderTextColor="#003f5c"
                        onChangeText={(otp) => setOtp(otp)}
                        keyboardType={'phone-pad'}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder=""
                        placeholderTextColor="#003f5c"
                        onChangeText={(otp) => setOtp(otp)}
                        keyboardType={'phone-pad'}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder=""
                        placeholderTextColor="#003f5c"
                        onChangeText={(otp) => setOtp(otp)}
                        keyboardType={'phone-pad'}
                    />
                </View>

            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => { navigation.navigate("Otp") }}>
                <Text style={styles.loginText}>Continue</Text>
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
    inputView: {
        backgroundColor: "#F1F3F3",
        borderRadius: 60,
        width: 60,
        height: 60,
        marginBottom: 20,
        alignItems: "center",
        marginRight: 5
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
        marginTop:30
    },
    loginText: {
        fontWeight: "700",
        letterSpacing: 2,
        color: "white",
        fontSize: 16
    }
})