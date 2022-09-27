import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { colors } from '../../assets/colors/colors';
import RadioButtonRN from 'radio-buttons-react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default function WelcomePage() {

    const data = [
        {
            label: 'Male'
        },
        {
            label: 'Female'
        }
    ];

    const [name, onChangeText] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [date, onChangeDate] = React.useState("");
    const [phone, onChangePhone] = React.useState("");


    return (

        <View style={styles.screen}> 
        <View style={{ alignItems: "center" }}>
                    <Image style={styles.image} source={require("../../assets/image/welcome.png")} />
                </View>

            <ScrollView >
                <View style={styles.container}>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "700", color: colors.secondaryhead, marginBottom: 5 }}>Welcome..</Text>
                        <Text style={{ fontSize: 18, fontWeight: "400", color: colors.secondaryhead, }}>Help us Know You Better!</Text>
                    </View>
                    
                    <View>
                        <Text style={{ color: colors.secondarytext, fontSize: 16 }}>Full Name</Text>
                        <TextInput
                            style={styles.inputView}
                            placeholder="Your Full Name"
                            placeholderTextColor="#6B7280"
                            color= '#1F2937'
                            onChangeText={onChangeText}
                            value={name}
                        />
                    </View>
                    <View>
                        <Text style={{ color: colors.secondarytext, fontSize: 16 }}>Mobile Number</Text>
                        <TextInput
                            style={styles.inputView}
                            placeholder="Your Email Address"
                            placeholderTextColor="#6B7280"
                            color= '#1F2937'
                            onChangeText={onChangePhone}
                            value={phone}
                        />
                    </View>
                    <View>
                        <Text style={{ color: colors.secondarytext, fontSize: 16 }}>Email Address</Text>
                        <TextInput
                            style={styles.inputView}
                            placeholder="Your Email Address"
                            placeholderTextColor="#6B7280"
                            color= '#1F2937'
                            onChangeText={onChangeEmail}
                            value={email}
                        />
                    </View>
                    <View>
                        <Text style={{ color: colors.secondarytext, fontSize: 16 }} >Gender : </Text>
                        <RadioButtonRN
                            data={data}
                            selectedBtn={(e) => console.log(e)}
                            activeColor="#106733"
                            deactiveColor="grey"
                            boxActiveBgColor="#F4F6F7"
                            boxDeactiveBgColor="#F4F6F7"
                            circleSize={12}
                            style={{
                                flexDirection: "row"
                            }}
                            boxStyle={{
                                borderWidth: 0,
                                width: 200,
                                bottom: 10
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{ color: colors.secondarytext, fontSize: 16 }}>Date Of Birth</Text>
                        <TextInput
                            style={styles.inputView}
                            placeholder="DD-MM-YYYY"
                            placeholderTextColor="#6B7280"
                            color= '#1F2937'
                            onChangeText={onChangeDate}
                            value={date}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ marginBottom: 10, alignItems: "center" }}>
                    <Text style={{ color: colors.secondarytext, fontSize: 13, textAlign: "center" }}>We'll send you a verification code to help us keep your account safe.</Text>
                </View>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <View style={styles.Sbutton}>
                            <Text style={{ color: "white", fontWeight: "600", fontSize: 16, textAlign: "center" }}>Verify</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
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
})