import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



export default function ForgetPass({ navigation }) {

    const [phone, onChangePhone] = React.useState("");

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
                        <MaterialIcons name={'arrow-back-ios'} style={styles.searchicon} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Image style={styles.image} source={require("../../assets/image/forget.png")} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Entypo name={'mobile'} style={styles.mobileicon} />
                    {/* <Text style={{ color: colors.secondarytext, fontSize: 16 }}>Full Name</Text> */}
                    <TextInput
                        style={styles.inputView}
                        placeholder="Mobile Number OR Email Id"
                        placeholderTextColor="#6B7280"
                        color='#1F2937'
                        onChangeText={onChangePhone}
                        value={phone}
                    />
                </View>
                <View style={{ marginBottom: 10, alignItems: "center" }}>
                    <Text style={{ color: colors.secondarytext, fontSize: 13, textAlign: "center" }}>We'll send you a verification code to help us keep your account safe.</Text>
                </View>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("Otp")}>
                    <View style={styles.Sbutton}>
                        <Text style={{ color: "white", fontWeight: "600", fontSize: 16, textAlign: "center" }}>Send Otp</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

let styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F4F6F7"
    },
    container: {
        margin: 18,
        // display:"flex"
        position: "relative",
    },
    searchicon: {
        fontSize: 20,
        color: colors.primary,
    },
    image: {
        marginTop: 50,
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
    },
    TextInput: {
        // height: 50,
        flex: 1,
        // padding: 10,
        // marginLeft: 20,
        color: "black"
    },
    mobileicon: {
        fontSize: 20,
        top: 20,
        paddingRight: 5,
        color: colors.secondarytext
    },
    Sbutton: {
        backgroundColor: "#2196F3",
        height: 50,
        width: "60%",
        backgroundColor: colors.primary,
        justifyContent: "center",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
})