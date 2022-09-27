import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

export default function Password() {

    const [name, onChangeText] = React.useState("");
    const [email, onChangeEmail] = React.useState("");

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}>
                    <Image style={styles.image} source={require("../../assets/image/privacy.png")} />
                </View>
                <View>
                        <Text style={{ color: colors.secondarytext, fontSize: 16 }}>New Password</Text>
                        <TextInput
                            style={styles.inputView}
                            placeholder="New Password"
                            placeholderTextColor="#6B7280"
                            color= '#1F2937'
                            onChangeText={onChangeText}
                            value={name}
                        />
                    </View>
                    <View>
                        <Text style={{ color: colors.secondarytext, fontSize: 16 }}>Confirm Password</Text>
                        <TextInput
                            style={styles.inputView}
                            placeholder="Confirm Password"
                            placeholderTextColor="#6B7280"
                            color= '#1F2937'
                            onChangeText={onChangePhone}
                            value={phone}
                        />
                    </View>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <View style={styles.Sbutton}>
                            <Text style={{ color: "white", fontWeight: "600", fontSize: 16, textAlign: "center" }}>Submit</Text>
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
    inputView: {
        backgroundColor: "#F1F3F3",
        borderRadius: 30,
        width: "90%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: colors.secondarytext
    },
    image: {
        marginTop: 20,
        marginBottom: 40,
        height: 250,
        width: 250,
        alignItems: "center"

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
})