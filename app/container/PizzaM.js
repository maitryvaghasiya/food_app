import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../assets/colors/colors'


export default function PizzaM() {

    const hotel = [
        {
            id: 1,
            image: require("../../assets/image/pizza.jpg"),
            hotelName: "Lapinoz Pizza ",
            rating: 5.0,
        },
    ]

    const HotelDetails = ({ item }) => {

        return (
            <TouchableOpacity>
                <View>
                    <View>
                        <Image source={item.image} style={styles.foodimg}></Image>
                    </View>
                    <View>
                        <Text>{item.hotelName}</Text>
                        <Text>{item.rating}</Text>
                    </View>
                    <View>
                        <FontAwesome name={'heart-o'} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                    <View style={styles.searchbox} >
                        <TouchableOpacity>
                            <MaterialIcons name={'arrow-back-ios'} style={styles.searchicon} />
                        </TouchableOpacity>
                        <TextInput style={styles.searchtext} /><Text style={styles.pizzaT} >Pizza</Text>
                        <TouchableOpacity>
                            <Entypo name={'cross'} style={styles.crossicon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.pizzaD}>
                    <TouchableOpacity>
                        <View style={styles.pizzaresto}>
                            <Text style={{ color: colors.primary, fontWeight: "600" }}>Restaurant</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.pizzadish}>
                            <Text style={{ color: "white", fontWeight: "600" }}>Dishes</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.heading}>
                    <View>
                        <Text style={styles.listhead}>All Restaurant Delivering Pizza</Text>
                    </View>
                </View>

                <View>

                </View>

            </View>
        </ScrollView>
    )
}

let styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    container: {
        margin: 18,
        // display:"flex"
        position: "relative",
    },
    searchbox: {
        height: 40,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#E6E7E9",
        flexDirection: 'row',
    },
    searchtext: {
        fontSize: 12,
        color: '#9CA3AF',
        marginLeft: 6,
    },
    searchicon: {
        fontSize: 20,
        color: colors.primary,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20

    },
    pizzaT: {
        color: colors.secondaryhead,
        fontSize: 14,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        top: 10,
        left: -25
    },
    crossicon: {
        fontSize: 20,
        color: colors.secondarytext,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        right: -225

    },
    pizzaD: {
        flexDirection: "row",
    },
    pizzaresto: {
        color: colors.primary,
        backgroundColor: "#E6E7E9",
        padding: 8,
        borderRadius: 15,
        marginRight: 10,
        marginTop: 15
    },
    pizzadish: {
        color: "white",
        backgroundColor: colors.primary,
        padding: 8,
        borderRadius: 15,
        marginRight: 10,
        marginTop: 15,

    },
    heading: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 15
    },
    listhead: {
        color: "#1F2937",
        fontSize: 17,
        fontWeight: "700"

    },
    foodimg: {
        height: 250,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 20
      },
})