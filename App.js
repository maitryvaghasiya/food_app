import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './app/container/BottomNavigation';
import PizzaD from './app/container/PizzaD';
import Home from './app/container/Home';
import PizzaLnozz from './app/container/PizzaLnozz';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import 'react-native-gesture-handler';
import { Drawernavigation } from './app/container/Drawernavigation';
import Onbrd from './app/container/Onbrd';
import { Provider } from 'react-redux';
import { configStore } from './app/redux/store';

export default function App() {
  const store = configStore()

  return (
    <Provider store={store}>
      <NavigationContainer 
    >
      {/* <Drawernavigation /> */}
      <BottomNavigation />
    </NavigationContainer>
    </Provider>
//  <PizzaD /> 
//  <Home /> 
//  <PizzaLnozz /> 
//  <Onbrd /> 

    
  )
}



// import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, Placeholder } from 'react-native'
// import React from 'react'
// import { iconss } from '../assets/icons';
// import { colors } from '../assets/colors/colors';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



// export default function Meesho() {


//     const DATA = [
//         {
//             id: 1,
//             product: 'new Winter jacket for Women',
//             price: '100',
//             orgPrice: '200',
//             image: require('../assets/images/koreangirl.png'),
//             imageIcon: require('../assets/icons/Vector.png')
//         },
//         {
//             id: 2,
//             product: 'Sumer Confert Shirt for  Women',
//             price: '72',
//             image: require('../assets/images/bluetshirt.png'),
//             imageIcon: require('../assets/icons/Vector.png')

//         },
//         {
//             id: 3,
//             product: 'new Winter jacket for Women',
//             price: '$ 100',
//             image: require('../assets/images/bluetshirt.png'),
//             imageIcon: require('../assets/icons/Vector.png')
//         },
//         {
//             id: 4,
//             product: 'Sumer Confert Shirt for  Women',
//             price: '$ 72',
//             image: require('../assets/images/koreangirl.png'),
//             imageIcon: require('../assets/icons/Vector.png')
//         }
//     ]

//     const ClothDAta = ({ item }) => {
//         console.log("item");
//         return (
//             <View style={styles.card}>
//                 <View>
//                     <Image style={[styles.images1, { height: item.id === 2 ? 200 : 170 }]} source={item.image} />
//                 </View>
//                 <TouchableOpacity style={styles.heartBox}>
//                     <MaterialIcons name="favorite-border" style={styles.imageIcon} color="#000" size={20} />
//                 </TouchableOpacity>
//                 <Text style={styles.cardText1}>{item.product}</Text>
//                 <Text style={styles.cardText2}>${item.price}</Text>
//                 <Text style={{ textDecorationLine: 'line-through' }}>$200</Text>
//             </View>


//         )
//     }
//     return (
//         <ScrollView>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 42 }}>
//                 <Image style={styles.menuIcon} source={iconss.menu} />

//                 <View style={styles.SearchBox}>
//                     <Image style={styles.searchIcon} source={iconss.searchIcon} />

//                     {/* placeholder //........... */}
//                 </View>

//                 <View style={styles.notificationIconBox}>
//                     <Image style={styles.notificationIcon} source={iconss.notification} />
//                 </View>
//             </View>
//             <View>
//                 <TouchableOpacity style={styles.mainBox}>
//                     <View style={styles.subBox}>
//                         <Text style={styles.text1}>New Arrivals</Text>
//                         <Text style={styles.text2}>SUMMER SALE</Text>
//                         <TouchableOpacity style={styles.button}>
//                             <Text style={styles.button}>Shop Now</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View>
//                         <View>
//                             <Image source={require('../assets/images/slider.png')} />
//                         </View>

//                     </View>
//                 </TouchableOpacity>


//                 <View style={styles.list}>

//                     <TouchableOpacity style={{ height: 40, width: 48, backgroundColor: "#FF5035", borderRadius: 5, }} ><Text style={{ alignSelf: 'center', textAlignVertical: 'center', marginVertical: 10, marginHorizontal: 10, fontFamily: 'Montserrat-Medium', color: '#ffff' }}>ALL</Text></TouchableOpacity>
//                     <TouchableOpacity style={{ width: 102, height: 40, backgroundColor: '#F3F3F3', borderRadius: 5 }}><Text style={{ alignSelf: 'center', textAlignVertical: 'center', marginVertical: 10, marginHorizontal: 10, fontFamily: 'Montserrat-Medium', color: 'black' }}>Categoires</Text></TouchableOpacity>
//                     <TouchableOpacity style={{ width: 59, height: 40, backgroundColor: '#F3F3F3', borderRadius: 5 }} ><Text style={{ alignSelf: 'center', textAlignVertical: 'center', marginVertical: 10, marginHorizontal: 10, fontFamily: 'Montserrat-Medium', color: 'black' }}>New</Text></TouchableOpacity>
//                     <TouchableOpacity style={{ width: 96, height: 40, backgroundColor: '#F3F3F3', borderRadius: 5 }} ><Text style={{ alignSelf: 'center', textAlignVertical: 'center', marginVertical: 10, marginHorizontal: 10, fontFamily: 'Medium', color: 'black' }}>Disount</Text></TouchableOpacity>
//                 </View>
//             </View>
//             <View>
//                 <FlatList
//                     contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
//                     data={DATA}
//                     renderItem={ClothDAta}
//                     keyExtractor={item => item.id}
//                 />
//             </View>
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     // Flex: {
//     //     display: 'flex',
//     // },
//     menuIcon: {
//         color: colors.primary,
//         marginRight: 14,
//         marginLeft: 15,
//         marginTop: 50,
//         marginBottom: 12,
//         marginVertical: 5,
//         height: 20,
//         width: 20
//     },
//     SearchBox: {
//         backgroundColor: colors.secondary,
//         height: 40,
//         width: 200,
//         marginTop: 42,
//         marginLeft: 15,
//         marginRight: 14,
//         borderRadius: 5,
//     },

//     searchIcon: {
//         height: 18,
//         width: 18,
//         marginRight: 9,
//         marginLeft: 20,
//         marginTop: 11,
//         marginBottom: 11,
//     },
//     notificationIconBox: {
//         height: 40,
//         width: 40,
//         marginLeft: 15,
//         marginLeft: 16,
//         marginTop: 42,
//         borderRadius: 5,
//         backgroundColor: '#F3F3F3'
//     },
//     notificationIcon: {
//         height: 18,
//         width: 18,
//         marginBottom: 11,
//         marginLeft: 11,
//         marginRight: 11,
//         marginTop: 11,
//     },


//     mainBox: {
//         height: 134,
//         width: 345,
//         margin: 20,
//         flexDirection: "row",
//     },
//     subBox: {
//         height: 70,
//         width: 140,
//         marginLeft: 19,
//         marginBottom: 30,
//         marginTop: 34,
//         padding: 5
//     },

//     text1: {
//         fontSize: 15,
//         fontFamily: 'Montserrat-SemiBold',
//         color: 'black'
//     },
//     text2: {
//         fontSize: 16,
//         color: "#FF5035",
//         fontFamily: 'Montserrat-SemiBold',
//         marginTop: 5
//     },
//     button: {
//         height: 26,
//         width: 90,
//         backgroundColor: "#FF5035",
//         marginTop: 5,
//         borderRadius: 5,
//         color: 'white',
//         fontFamily: 'Montserrat-Regular',
//         textAlign: 'center',
//     },
//     images1: {
//         width: '100%',
//         borderRadius: 5,

//     },
//     list: {
//         width: 335,
//         height: 40,
//         alignSelf: 'center',
//         flexDirection: 'row',
//         marginTop: 30,
//         marginBottom: 20,
//         marginLeft: 15,
//         marginRight: 25,
//         justifyContent: 'space-between'
//     },
//     card: {
//         height: 280,
//         marginVertical: 10,
//         width: 150,
//         backgroundColor: '#F3F3F3',
//         marginBottom: 15,
//         marginLeft: 15,
//         marginRight: 15,
//         marginTop: 15,
//         marginTop: 20,
//         position: 'relative'
//     },

//     cardText1: {
//         color: 'black',
//         fontSize: 13,
//         lineHeight: 22,
//         fontFamily: 'Montserrat-Medium',
//         marginHorizontal: 10,
//     },
//     cardText2: {
//         color: 'black',
//         fontSize: 15,
//         lineHeight: 22,
//         fontFamily: 'Montserrat-Bold',
//         marginHorizontal: 10,
//     },
//     textBox: {
//         backgroundColor: 'red'
//     },
//     heartBox: {
//         height: 24,
//         width: 24,
//         backgroundColor: colors.primary,
//         borderRadius: 50,
//         position: 'absolute',
//         top: 10,
//         left: 10
//     },
//     imageIcon: {
//         color: 'black'
//     }

// })
// 