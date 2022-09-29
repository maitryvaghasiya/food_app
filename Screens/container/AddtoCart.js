import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Layout from './Layout';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddtoCart(props) {
    const [cartItem, setcartItem] = useState([]);
    const [subTotal, setsubTotal] = useState(0);
    const [shipRate, setshipRate] = useState(0);
    const [discount, setdiscount] = useState(0);
    const [paybleAmt, setpaybleAmt] = useState(0);
    const [FirstcartItem, setFirstcartItem] = useState([]);

    const [loading, setLoading] = useState(false);


    // React.useEffect(() => {
    //     getAddedItem()
    // }, []);

    // setTimeout(() => {
    //     getAddedItem()
    // }, 100);

    const Loading = () => {
        return (
            <View style={{
                // justifyContent: "space-around",
                alignItems: 'center',
                justifyContent: "center",
                flex: 1
            }}>
                {/* <ActivityIndicator
                        color="red"
                        style={{ height: 500, width: 500, }}
                    /> */}
                <ActivityIndicator size="large" color="#163e58" />
                {/* Loading........... */}
            </View>
        );
    }

    // const getAddedItem = async () => {
    //     const GetItem = await AsyncStorage.getItem('AddedNewItem');
    //     GetItem && setFirstcartItem(JSON.parse(GetItem))
    // }

    // React.useEffect(() => {
    //     setcartItem(FirstcartItem)
    // }, [FirstcartItem]);

    // React.useEffect(() => {
    //     SubTotalCalculation()
    // }, [cartItem]);

    // React.useEffect(() => {
    //     const data = subTotal + shipRate - discount
    //     setpaybleAmt(data)
    // }, [subTotal, shipRate, discount]);

    const SubTotalCalculation = () => {

        const calcData = cartItem.length > 0 && cartItem.map((value, index) => {
            const data = value.product_mrp * value.itemQty
            return data
        })
        const sum = calcData && calcData.reduce(add, 0); // with initial value to avoid when the array is empty
        function add(accumulator, a) {
            return accumulator + a;
        }
        setsubTotal(sum)

        const ShipData = cartItem.length > 0 && cartItem.map((value, index) => {
            const data = value.product_shipping_price
            return data
        })
        const shiSum = ShipData && ShipData.reduce(add, 0); // with initial value to avoid when the array is empty
        function add(accumulator, a) {
            return accumulator + a;
        }
        setshipRate(shiSum)

        const discountProductData = cartItem.length > 0 && cartItem.map((value, index) => {
            const data = value.product_shipping_price
            return data
        })
        const discountProduct = discountProductData && discountProductData.reduce(add, 0); // with initial value to avoid when the array is empty
        function add(accumulator, a) {
            return accumulator + a;
        }
        setdiscount(discountProduct)
    }

    const addedProductQty = (value) => {
        const Addedcart = cartItem.map((e, index) => {
            if (e.product_id === value.product_id) {
                const new_obj = { ...e, itemQty: e.itemQty + 1 }
                return new_obj
            }
            else {
                return e
            }
        })
        setcartItem(Addedcart)
        AsyncStorage.setItem('AddedNewItem', JSON.stringify(Addedcart))
    }

    const minusProductQty = (value) => {
        if (value.itemQty > 1) {
            const Addedcart = cartItem.map((e, index) => {
                if (e.product_id === value.product_id) {
                    const new_obj = { ...e, itemQty: e.itemQty - 1 }
                    return new_obj
                }
                else {
                    return e
                }
            })
            setcartItem(Addedcart)
            AsyncStorage.setItem('AddedNewItem', JSON.stringify(Addedcart))
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* <Layout {...props}> */}
                {
                    loading ? <Loading /> :
                        <View style={{ margin: 24 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#163e58' }}>CART</Text>
                            <View style={{ marginVertical: 12 }}>
                                {cartItem.length > 0 && cartItem.map((value, index) => {
                                    return (<View style={{
                                        paddingHorizontal: 5, borderWidth: 1,
                                        borderColor: 'gray', backgroundColor: 'white', display: 'flex', marginVertical: 6
                                    }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image
                                                resizeMode='contain'
                                                style={{
                                                    width: '26%', height: '100%',
                                                }}
                                                source={{ uri: value.product_img }}
                                            />

                                            <View style={{ alignContent: 'center', alignSelf: 'center' }}>
                                                <Text style={{ fontSize: 18, }}>{`${value.product_mrp} * ${value.itemQty}`}</Text>
                                                <View style={{ width: 180 }}>
                                                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{value.product_name}</Text>
                                                </View>
                                                <View style={{}}>
                                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{value.purchase_qty}</Text>
                                                </View>

                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 10, flex: 1, alignSelf: 'center', }}>
                                                <View style={{ paddingVertical: 0, marginVertical: 0, paddingHorizontal: 0, justifyContent: 'flex-end', }}>
                                                    <TouchableOpacity onPress={() => minusProductQty(value)} style={{ paddingVertical: 4, borderRadius: 0, padding: 0, justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end' }}>
                                                        <AntDesign style={{ backgroundColor: '#f7f7f7', alignSelf: 'center', justifyContent: 'center' }} name="minus" size={20} color="#4e6c80" />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ paddingVertical: 4, borderRadius: 0, backgroundColor: '#163e58', padding: 0, justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end' }}>
                                                        <Text style={{ alignSelf: 'center', fontSize: 18, color: 'white' }}>{value.itemQty}</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => addedProductQty(value)} style={{ paddingVertical: 6, borderRadius: 0, paddingHorizontal: 2, alignSelf: 'center', borderBottomColor: 'gray', padding: 0, justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end' }}>
                                                        <AntDesign style={{ backgroundColor: '#f7f7f7', }} name="plus" size={20} color="#4e6c80" />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ justifyContent: 'flex-end' }}>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    )
                                })}
                            </View>
                            <View style={{ backgroundColor: '#f7f7f7', borderWidth: 1, borderColor: 'gray', borderRadius: 6, marginVertical: 4 }}>
                                <TouchableOpacity style={styles.deliveryaddress}>
                                    <Text style={{ color: '#163e58', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Item</Text>
                                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, }}>{cartItem.length}</Text>
                                    </View>

                                </TouchableOpacity>
                                <View style={{ marginVertical: 0, borderTopWidth: 1, padding: 0, marginHorizontal: 3 }}>
                                    <View style={{ justifyContent: 'space-between', }}>
                                        <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                                            <Text style={{color: '#163e58', fontWeight: 'bold', fontSize: 16, }}>Sub Total </Text>
                                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                <Text style={{ color: '#163e58',fontWeight: 'bold', fontSize: 16, justifyContent: 'flex-end' }}>₹ {parseFloat(subTotal).toFixed(2)}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', padding: 10, paddingTop: 0 }}>
                                            <Text style={{ color: '#163e58',fontWeight: 'bold', fontSize: 16, }}>Delivery Charge  </Text>
                                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                <Text style={{color: '#163e58', fontWeight: 'bold', fontSize: 16, justifyContent: 'flex-end' }}>{shipRate < 1 ? 'Free' : parseFloat(shipRate).toFixed(2)}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: 'lightgray', marginVertical: 2, borderTopWidth: 1 }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#efb537', marginVertical: 2 }}>Your Total Savings</Text>
                                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 16, justifyContent: 'flex-end', color: '#efb537' }}>{discount < 1 ? 0 : parseFloat(discount).toFixed(2)}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderColor: 'lightgray', marginVertical: 10, }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', }}>Payable Amount (inc.all taxes)</Text>
                                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                                                <Text style={{ fontSize: 16, justifyContent: 'flex-end', fontWeight: 'bold', color: 'black' }}>₹ {parseFloat(paybleAmt).toFixed(2)}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignContent: "space-between", justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('home')} style={{ backgroundColor: '#106733', padding: 10, marginVertical: 14, borderRadius: 4, alignContent: "space-between", }}>
                                    <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'white', }}>Continue</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => props.navigation.navigate('CartScreen', {
                                    totalItem: cartItem,
                                    subTotal: subTotal,
                                    shipRate: shipRate,
                                    paybleAmt: paybleAmt
                                })} style={{ backgroundColor: '#106733', padding: 10, marginVertical: 14, borderRadius: 4, marginHorizontal: 20, paddingHorizontal: 14, alignContent: "space-between", marginHorizontal: 0, }}>
                                    <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'white', }}>Checkout</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                }
                {/* </Layout> */}
            </ScrollView>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
    },
    deliveryaddress: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        // backgroundColor: 'white',
        padding: 14,
        // borderRadius: 6,
        // marginVertical: 20
    },
    checkoutbtn: {
        display: 'flex',
        // width: '50%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#106733',
        padding: 10,
        borderRadius: 6,
        margin: 40,
        // marginVertical: 50,
        alignSelf: 'center'
    },
});