import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Setting({ navigation }) {
    return (
        <ScrollView style={styles.screen}>
        <StatusBar
            animated={true}
            backgroundColor="#106733"
            barStyle="light-content"
        />
        <View style={styles.container}>
            <View style={[styles.bg, { flexDirection: "row", }]}>

                <View>
                <FontAwesome name={"user-circle-o"} style={styles.boy} />
                    {/* <Image source={require("../../assets/image/boyimage.jpg")} style={styles.boy} /> */}
                </View>
                <View style={{ marginTop: 25 }}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "500", letterSpacing: 1, marginBottom: 5 }}>Steven Smith</Text>
                    <Text style={{ color: "white" }}>+91 987654321</Text>
                </View>

            </View>

            <View style={styles.box}>
                <View style={{ paddingTop: 10 }}>

                    <TouchableOpacity>
                        <View style={[styles.info, { marginTop: 20 }]}>
                            <FontAwesome name={"user"} style={styles.icon} />
                            <Text style={{ fontSize: 16, color: colors.secondaryhead }}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.info}>
                            <MaterialCommunityIcons name={"notebook-check"} style={styles.icon} />
                            <Text style={{ fontSize: 16, color: colors.secondaryhead }}>Your Orders</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.info}>
                            <Entypo name={"location-pin"} style={styles.icon} />
                            <Text style={{ fontSize: 16, color: colors.secondaryhead }}>Delivery Address</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.info}>
                            <MaterialIcons name={"payment"} style={styles.icon} />
                            <Text style={{ fontSize: 16, color: colors.secondaryhead }}>Payment Method</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.info}>
                            <Entypo name={"help-with-circle"} style={styles.icon} />
                            <Text style={{ fontSize: 16, color: colors.secondaryhead }}>Help & FAQs</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.info}>
                            <Ionicons name={"log-out"} style={[styles.icon,{fontSize:22,marginRight:8}]} />
                            <Text style={{ fontSize: 16, color: colors.secondaryhead }}>Log Out</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

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
        // margin: 18,
        // display:"flex"
        position: "relative",
        // flex: 1,

    },
    boy: {
        margin: 18,
        marginTop: 25,
        fontSize:50,
        color:"white"

    },
    bg: {
        backgroundColor: colors.primary,
        height: 130,
        width: "100%",
    },
    box: {
        backgroundColor: "#F4F6F7",
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: -30
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        // marginTop: 20, 
        marginBottom: 30
    },
    line: {
        borderBottomWidth: 1,
        borderColor: colors.secondarytext,
        marginRight: 18,
        marginLeft: 18
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
        marginLeft: 18,
        color:colors.primary
    }
})