import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../assets/colors/colors'


export default function PizzaLnozz() {

    const hotel = [
        {
            id: 1,
            image: require("../../assets/image/pizza.jpg"),
            foodName: "Margherita Pizza",
            price: "Rs.140",
            details: "A classic Cheesy Margherita. Can't Go Wrong."
        },
        {
            id: 2,
            image: require("../../assets/image/caprina1.webp"),
            foodName: "Las Vegas Pizza",
            price: "Rs.170",
            details: "A classic Cheesy Margherita. Can't Go Wrong."
        },
        {
            id: 3,
            image: require("../../assets/image/holic1.jpg"),
            foodName: "Cheesy Seven Pizza",
            price: "Rs.210",
            details: "A classic Cheesy Margherita. Can't Go Wrong."
        },
    ]

    const HotelDetails = ({ item }) => {

        return (
            <View >
                <View>
                    <View>
                        <View>
                            <Text style={{borderColor: "grey", borderWidth: 0.2, height: 1, width: "100%"}}></Text>
                        </View>
                        <Text style={styles.fname}>{item.foodName}</Text>
                        <Text style={styles.priceP}>{item.price}</Text>
                    </View>
                    <View >
                        <Image source={item.image} style={styles.foodimgp}></Image>
                    </View>
                </View>
                <View>
                    <View>
                        <TouchableOpacity>
                            <FontAwesome name={'heart-o'} style={styles.heart} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity>
                        <AntDesign name={'arrowleft'} style={styles.backicon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.heading}>
                    <View style={{ justifyContent: "space-between" }}>
                        <Text style={styles.listhead}>La pino'z Pizza</Text>
                        <Text style={styles.p1}>Pizza, Fast Food, Beverages</Text>
                    </View>
                    <View style={styles.Frate}>
                        <Text style={styles.rate}>4.3</Text>
                        <FontAwesome name={'star'} style={styles.star} />
                    </View>
                </View>

                <View>
                    <Text style={styles.p2}>Best in Pizza</Text>
                </View>

                <View>
                    <FlatList
                        data={hotel}
                        renderItem={HotelDetails}
                        keyExtractor={hotelimg => hotelimg.id}
                    >
                    </FlatList>
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
        margin: 18,
        position: "relative",
    },
    searchicon: {
        fontSize: 20,
        color: "black",
    },
    backicon: {
        color: "black",
        fontSize: 22
    },
    dot3: {
        color: "black",
        fontSize: 20
    },
    heading: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 15
    },
    listhead: {
        color: "#1F2937",
        fontSize: 24,
        fontWeight: "700"
    },
    foodimgp: {
        height: 150,
        width: "40%",
        borderRadius: 20,
        // marginBottom: 10,
        display: "flex",
        alignSelf: "flex-end",
        position: "relative",
        top: -65
    },
    rate: {
        height: 30,
        width: 60,
        borderRadius: 5,
        backgroundColor: colors.primary,
        color: "white",
        alignItems: "center",
        paddingLeft: 10,
        paddingTop: 4,
        fontSize: 16,
    },
    Frate: {
        position: "relative",
        alignSelf: "flex-end"
    },
    star: {
        color: "white",
        fontSize: 16,
        position: "absolute",
        top: 7,
        left: 30,
        marginLeft: 5
    },
    p2: {
        color: "black",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 25
    },
    fname: {
        color: "black",
        fontSize: 20,
        fontWeight: "700",
        marginTop: 20
    },
    priceP: {
        color: colors.secondaryhead,
        fontSize: 18,
        fontWeight: "600",
        marginTop: 20
    },
    detail: {
        color: colors.secondarytext,
        fontSize: 17,
        fontWeight: "600",
    },
    heart: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: "900"
    }
})