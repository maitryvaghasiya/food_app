import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../assets/colors/colors'

export default function PizzaD() {

    const Hotel = [
        {
            id: 1,
            image: require("../../assets/image/lapinozz1.jpg"),
            hotelName: "Lapinoz Pizza ",
            hotelItem: "Pizza, Fast Food, Beverages",
            location: "kazi Deiry, Taiger Pass",
            area: "Chittagong",
            rating: 4.9,
            onePerson: "Rs.250 for  one"
        },
        {
            id: 2,
            image: require("../../assets/image/dominoz1.jpg"),
            hotelName: "Dominoz Pizza",
            hotelItem: "Pizza, Fast Food",
            location: "kazi Deiry, Taiger Pass",
            area: "Chittagong",
            rating: 4.8,
            onePerson: "Rs.200 for one"
        },
        {
            id: 3,
            image: require("../../assets/image/holic1.jpg"),
            hotelName: "Pizza Holic",
            hotelItem: "Fast Food, Mexican, Italian",
            location: "kazi Deiry, Taiger Pass",
            area: "Chittagong",
            rating: 4.7,
            onePerson: "Rs.150 for one"
        },
        {
            id: 4,
            image: require("../../assets/image/laziz1.webp"),
            hotelName: "Laziz Pizza",
            hotelItem: "Pizza, Sandwich, Burger",
            location: "kazi Deiry, Taiger Pass",
            area: "Chittagong",
            rating: 3.5,
            onePerson: "Rs.300 for one"
        },
        {
            id: 5,
            image: require("../../assets/image/woklee1.jpg"),
            hotelName: "Woklee Pizza",
            hotelItem: "Pizza, Fast Food, Desserts ",
            location: "kazi Deiry, Taiger Pass",
            area: "Chittagong",
            rating: 4.1,
            onePerson: "Rs.250 for one"

        },
        {
            id: 6,
            image: require("../../assets/image/caprina1.webp"),
            hotelName: "Pizza Caprina",
            hotelItem: "Pizza, Fast Food, Pasta",
            location: "kazi Deiry, Taiger Pass",
            area: "Chittagong",
            rating: 4.00,
            onePerson: "Rs.250 for one"

        },
    ]

    const HotelData = ({ item }) => {

        return (

            <TouchableOpacity>
                <View style={styles.foodhotel}>
                    <View >
                        <Image source={item.image} style={styles.foodimg}></Image>
                    </View>
                    <View style={{ flexDirection: "row", marginRight: 10, marginLeft: 10 }}  >
                        <View>
                            <Text style={styles.Hname}>{item.hotelName}</Text>
                            <Text style={styles.foodtype}>{item.hotelItem}</Text>

                        </View >
                        <View>
                            <View style={styles.Frate}>
                                <Text style={styles.rate}>{item.rating}</Text>
                                <FontAwesome name={'star'} style={styles.star} />
                            </View>
                            <View>
                                <Text style={styles.p1}>{item.onePerson}</Text>
                            </View>

                        </View>
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
                        <Text style={{ color: "white", fontWeight: "600" }}>Restaurant</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.pizzadish}>
                        <Text style={{ color: colors.primary, fontWeight: "600" }}>Dishes</Text>
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.heading}>
                    <View>
                        <Text style={styles.listhead}>All Restaurant Delivering Pizza</Text>
                    </View>
                </View>

                <View>
                    <FlatList
                        // numColumns={1}
                        // horizontal
                        data={Hotel}
                        renderItem={HotelData}
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
        color: "white",
        backgroundColor: colors.primary,
        padding: 8,
        borderRadius: 15,
        marginRight: 10,
        marginTop: 15
    },
    pizzadish: {
        color: colors.primary,
        backgroundColor: "#E6E7E9",
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
    card: {
        // display:"flex",
        position: "relative",
        // marginLeft:10,
        height: 210,
        width: 148,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20,
        marginRight: 12
      },
      seemore: {
        color: colors.secondarytext,
        marginTop: 8,
        marginRight: 3,
        height: 30,
        width: "100%",
        borderColor: colors.secondarytext,
        borderWidth: 1,
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10
    
      },
      arrow1: {
        color: colors.secondarytext,
        marginTop: 5,
        fontSize: 12,
        marginLeft: 5
      },
      imgOfFood: {
        marginTop: 16,
        height: 104,
        width: 130,
        marginBottom: 16
      },
      iconlocationfood: {
        fontSize: 15,
        color: colors.primary,
      },
      add: {
        flexDirection: "row"
    
      },
      iconloc: {
        color: colors.primary,
        fontSize: 15,
        marginTop: 2,
        paddingLeft: 0
    
      },
      foodname: {
        color: colors.secondaryhead,
        fontSize: 16,
        fontWeight: "600"
    
      },
      foodresto: {
        color: colors.secondarytext,
        fontSize: 12
      },
      iconlocationhotel: {
        fontSize: 20,
        color: colors.primary,
        marginTop: 7
      },
      address: {
        color: colors.secondarytext,
        fontSize: 12
      },
      btn: {
        backgroundColor: colors.primary,
        height: 28,
        width: 88,
        borderRadius: 10,
        justifyContent: 'center',
        // alignSelf:"flex-end"
      },
      btntext: {
        fontSize: 12,
        fontWeight: "700",
        color: "white",
        textAlign: 'center',
      },
      foodhotel: {
        height: 340,
        width: "100%",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "grey",
        marginTop: 20
        // borderWidth:0.5,
        // shadowColor: "red",
        // shadowOpacity: 1,
        // shadowRadius: 2,
        // shadowOffset: {
        //   height: 1,
        //   width: 1
        // }
    
      },
      foodimg: {
        height: 250,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 20
      },
      Hname: {
        color: colors.secondaryhead,
        fontWeight: "500",
        fontSize: 18
      },
      foodtype: {
        color: colors.secondarytext
    
      },
      rate: {
        height: 25,
        width: 50,
        borderRadius: 5,
        backgroundColor: colors.primary,
        color: "white",
        // justifyContent:"center",
        alignItems: "center",
        paddingLeft: 5,
        paddingTop: 2,
        fontSize: 14,
      },
      p1: {
        color: colors.secondarytext,
      },
      Frate: {
        position: "relative",
      },
      star: {
        color: "white",
        fontSize: 13,
        position: "absolute",
        // justifyContent:"center",
        // textAlign:"center",
        // alignItems:"center"
        top: 5,
        left: 25,
        marginLeft: 4
    
      }
    
})