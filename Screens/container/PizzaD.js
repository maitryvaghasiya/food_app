import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Pressable, FlatList, Modal, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import { Tab, TabView } from "@rneui/themed";
import ModalSelector from 'react-native-modal-selector'
import { RadioButton } from 'react-native-paper';

import { colors } from '../../assets/colors/colors'

export default function PizzaD({ navigation }) {

    // const [index, setIndex] = React.useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const [checked, setChecked] = React.useState('first');


    const Hotel = [
        {
            id: 1,
            image: require("../../assets/image/lapinozz1.jpg"),
            hotelName: "Margerita Pizza ",
            hotelItem: "Pizza, Fast Food, Beverages",
            price: 300,
            rating: 4.9,
        },
        {
            id: 2,
            image: require("../../assets/image/dominoz1.jpg"),
            hotelName: "Dominoz Pizza",
            hotelItem: "Pizza, Fast Food",
            price: 300,
            rating: 4.8,
        },
        {
            id: 3,
            image: require("../../assets/image/holic1.jpg"),
            hotelName: "Pizza Holic",
            hotelItem: "Fast Food, Mexican, Italian",
            price: 300,
            rating: 4.7,
        },
        {
            id: 4,
            image: require("../../assets/image/laziz1.webp"),
            hotelName: "Laziz Pizza",
            hotelItem: "Pizza, Sandwich, Burger",
            price: 300,
            rating: 3.5,
        },
        {
            id: 5,
            image: require("../../assets/image/woklee1.jpg"),
            hotelName: "Woklee Pizza",
            hotelItem: "Pizza, Fast Food, Pasta",
            price: 300,
            rating: 4.1,

        },
        {
            id: 6,
            image: require("../../assets/image/caprina1.webp"),
            hotelName: "Pizza Caprina",
            hotelItem: "Pizza, Fast Food, Pasta",
            price: 300,
            rating: 4.00,

        },
    ]

    const HotelData = ({ item }) => {

        return (

            <TouchableOpacity>
                <View style={styles.foodhotel}>
                    <View style={{ flexDirection: "row" }}>
                        <View >
                            <Image source={item.image} style={styles.foodimg}></Image>
                        </View>
                        <View style={{ width: "58%" }}>
                            <View>
                                <Text style={styles.Hname}>{item.hotelName}</Text>
                                <Text style={styles.foodtype}>{item.hotelItem}</Text>

                            </View >
                            <View>
                                <Text style={styles.Pname}>Rs. {item.price}</Text>
                            </View >
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={styles.Frate}>
                                    <Text style={styles.rate}>{item.rating}</Text>
                                    <FontAwesome name={'star'} style={styles.star} />
                                </View>
                                <View>
                                    <View style={styles.centeredView}>
                                        <Modal
                                            animationType="slide"
                                            transparent={true}
                                            visible={modalVisible}
                                            onRequestClose={() => {
                                                Alert.alert("Modal has been closed.");
                                                setModalVisible(!modalVisible);
                                            }}
                                        >
                                            <View style={styles.centeredView}>
                                                <View style={styles.modalView}>
                                                    <Text style={styles.modalText}>Margerita pizza</Text>

                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text>First</Text>
                                                        <RadioButton
                                                            value="first"
                                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                                            onPress={() => setChecked('first')}
                                                        />
                                                    </View>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text>First</Text>
                                                        <RadioButton
                                                            value="second"
                                                            status={checked === 'second' ? 'checked' : 'unchecked'}
                                                            onPress={() => setChecked('second')}
                                                        />
                                                    </View>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text>First</Text>
                                                        <RadioButton
                                                            value="third"
                                                            status={checked === 'third' ? 'checked' : 'unchecked'}
                                                            onPress={() => setChecked('third')}
                                                        />
                                                    </View>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Pressable

                                                            style={[styles.button, styles.buttonClose]}
                                                            onPress={() => setModalVisible(!modalVisible)}
                                                        >
                                                            <Text style={styles.textStyle}>Cancel</Text>
                                                        </Pressable>
                                                        <Pressable

                                                            style={[styles.button, styles.buttonClose]}
                                                            onPress={() => setModalVisible(!modalVisible)}
                                                        >
                                                            <Text style={styles.textStyle}>Add Items</Text>
                                                        </Pressable>
                                                    </View>
                                                </View>
                                            </View>
                                        </Modal>
                                        <Pressable
                                            // style={[styles.button, styles.buttonOpen]}
                                            style={[styles.addbtn]}
                                            onPress={() => setModalVisible(true)}
                                        >
                                            <Text style={styles.addtext}>Add + </Text>
                                        </Pressable>
                                    </View>
                                    <View>

                                    </View>
                                    {/* <TouchableOpacity style={styles.addbtn}>
                                        
                                    </TouchableOpacity> */}
                                </View>

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
                <View style={{ marginTop: 5 }}>
                    <View style={styles.searchbox} >
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <MaterialIcons name={'arrow-back-ios'} style={styles.searchicon} />
                            </TouchableOpacity>
                            <TextInput /><Text style={styles.pizzaT} >Pizza</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity >
                                <View>
                                    <MaterialCommunityIcons name={"food-outline"} style={[styles.search, { paddingRight: 10 }]} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                <View >

                                    <Feather name={"search"} style={styles.search} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>
                {/* <Tab
                        value={index}
                        onChange={(e) => setIndex(e)}
                        indicatorStyle={{
                            backgroundColor: 'white',
                            height: 3,
                        }}
                        variant="primary"
                    >
                        <Tab.Item
                            title="Recent"
                            titleStyle={{ fontSize: 12 }}
                            icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
                        />
                        <Tab.Item
                            title="favorite"
                            titleStyle={{ fontSize: 12 }}
                            icon={{ name: 'heart', type: 'ionicon', color: 'black' }}
                        />
                        <Tab.Item
                            title="cart"
                            titleStyle={{ fontSize: 12 }}
                            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
                        />
                    </Tab>

                    <TabView value={index} onChange={setIndex} animationType="spring">
                        {console.log("ffffff",index)}                     
                        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
                            <Text h1>Recent</Text>
                        </TabView.Item>
                        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                            <Text h1>Favorite</Text>
                        </TabView.Item>
                        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                            <Text h1>Cart</Text>
                        </TabView.Item>
                    </TabView> */}

                <View>
                    <FlatList
                        data={Hotel}
                        renderItem={HotelData}
                        keyExtractor={hotelimg => hotelimg.id}
                    >
                    </FlatList>
                </View>
                <View >
                    <TouchableOpacity style={styles.all}>
                        <View style={styles.seemore}>
                            <Text style={{ color: colors.secondarytext }}>See More</Text>

                            <Entypo name={'chevron-thin-down'} style={styles.arrow1} />
                        </View>
                    </TouchableOpacity>
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
        // display:"flex"
        position: "relative",
    },
    searchbox: {
        height: 40,
        width: "100%",
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    search: {
        fontSize: 20,
        fontWeight: "900",
        color: colors.secondaryhead,
        fontSize: 22,
    },
    searchicon: {
        fontSize: 20,
        color: colors.primary,
    },
    pizzaT: {
        color: colors.secondaryhead,
        fontSize: 16,
        fontWeight: "700",
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
    foodhotel: {
        // flexDirection:"row",
        height: 120,
        width: "100%",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "grey",
        marginTop: 10,
        backgroundColor: "#fff"

    },
    foodimg: {
        height: 120,
        width: 120,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 20,
        marginRight: 15,
        // position:"absolute"
    },
    Hname: {
        color: colors.secondaryhead,
        fontWeight: "500",
        fontSize: 18,
        marginBottom: 7,
        marginTop: 2
    },
    foodtype: {
        color: colors.secondarytext,
        marginBottom: 5

    },
    rate: {
        height: 25,
        width: 50,
        borderRadius: 5,
        backgroundColor: colors.primary,
        color: "white",
        alignItems: "center",
        paddingLeft: 5,
        paddingTop: 2,
        fontSize: 14,
    },
    p1: {
        color: colors.secondarytext,
        fontSize: 12,
        fontWeight: "600"
    },
    Pname: {
        color: colors.secondaryhead,
        fontWeight: "500",
        fontSize: 16,
        marginBottom: 7
    },
    Frate: {
        position: "relative",
        // alignSelf: "flex-end"
    },
    star: {
        color: "white",
        fontSize: 13,
        position: "absolute",
        top: 5,
        left: 25,
        marginLeft: 4
    },
    addbtn: {
        height: 26,
        width: 60,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: "center",
        top: -3
    },
    addtext: {
        color: colors.primary,
        textAlign: "center"
    },
    all: {
        flexDirection: "row",
        // marginTop:10
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 100,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:"100%",
        height:"50%",
        justifyContent: "flex-end",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
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
})