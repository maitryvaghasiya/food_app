import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default function Otp({ navigation }) {
    const [number, onChangeNumber] = React.useState("");
    // const [password, onChangePassword] = React.useState("");
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
                        <MaterialIcons name={'arrow-back-ios'} style={styles.searchicon} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Image style={styles.image} source={require("../../assets/image/otp.png")} />
                </View>
                <View style={{flexDirection:"row"}}>
                    <TextInput
                        style={styles.inputView}
                        placeholder=""
                        placeholderTextColor="#6B7280"
                        color='#1F2937'
                        onChangeText={onChangeNumber}
                        value={number}
                    />
                    <TextInput
                        style={styles.inputView}
                        placeholder=""
                        placeholderTextColor="#6B7280"
                        color='#1F2937'
                        onChangeText={onChangeNumber}
                        value={number}
                    />
                    <TextInput
                        style={styles.inputView}
                        placeholder=""
                        placeholderTextColor="#6B7280"
                        color="#1F2937"
                        onChangeText={onChangeNumber}
                        value={number}
                    />
                    <TextInput
                        style={styles.inputView}
                        placeholder=""
                        placeholderTextColor="#6B7280"
                        color="#1F2937"
                        onChangeText={onChangeNumber}
                        value={number}
                    />
                    <TextInput
                        style={styles.inputView}
                        placeholder=""
                        placeholderTextColor="#6B7280"
                        color="#1F2937"
                        onChangeText={onChangeNumber}
                        value={number}
                    />
                    <TextInput
                        style={styles.inputView}
                        placeholder=""
                        placeholderTextColor="#6B7280"
                        color="#1F2937"
                        onChangeText={onChangeNumber}
                        value={number}
                    />

                </View>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("Password")}>
                    <View style={styles.Sbutton}>
                        <Text style={{ color: "white", fontWeight: "600", fontSize: 16, textAlign: "center" }}>Verify</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
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
        marginTop: 10
    },
    image: {
        marginTop: 20,
        marginBottom: 40,
        height: 250,
        width: 250,
        alignItems: "center"

    },
    inputView: {
        backgroundColor: "#F1F3F3",
        // borderRadius: 30,
        width: "12%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: colors.secondarytext,
        marginLeft:14
    },
})