import { View, Text, ScrollView, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Home({ navigation }) {

  const Slider = [
    {
      id: 1,
      image: require("../../assets/image/offer.png")
    },
    {
      id: 2,
      image: require("../../assets/image/new.png")
    },
    {
      id: 3,
      image: require("../../assets/image/offer.png")
    }
  ]

  const SliderData = ({ item }) => {

    return (
      <TouchableOpacity >
        <View>
          <Image source={item.image} style={styles.sliderimg}></Image>
        </View>
      </TouchableOpacity>

    )
  }

  const Menu = [
    {
      id: 1,
      image: require("../../assets/image/pizza.jpg"),
      name: "Pizzas"
    },
    {
      id: 2,
      image: require("../../assets/image/chaat.jpg"),
      name: "Chaat"
    },
    {
      id: 3,
      image: require("../../assets/image/sand.jpg"),
      name: "Sandwich"
    },
    {
      id: 4,
      image: require("../../assets/image/burger.webp"),
      name: "Burger"
    },
    {
      id: 5,
      image: require("../../assets/image/shake.webp"),
      name: "Shake"
    },
    {
      id: 6,
      image: require("../../assets/image/panir.webp"),
      name: "Paneer"
    },
    {
      id: 7,
      image: require("../../assets/image/fries.jpg"),
      name: "Fries"
    },
    {
      id: 8,
      image: require("../../assets/image/pasta.jpg"),
      name: "Pasta"
    },

  ]

  const MenuData = ({ item }) => {
    return (
      <View style={styles.Fmenu}>
        <TouchableOpacity onPress={() => navigation.navigate("PizzaD")}>
          <View style={styles.menucard}>
            <Image source={item.image} style={styles.imgOfmenuFood}></Image>
            <Text style={styles.Fname}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const Food = [
    {
      id: 1,
      image: require("../../assets/image/p1.jpeg"),
      name: "Las Vegas Pizza",
    },
    {
      id: 2,
      image: require("../../assets/image/p5.jpeg"),
      name: "Farm Villa Pizza",
    },
    {
      id: 3,
      image: require("../../assets/image/p4.jpeg"),
      name: "Cheesy 7 Pizza",
    },
    {
      id: 4,
      image: require("../../assets/image/p3.jpeg"),
      name: "Hot Passion Pizza",
    },
    {
      id: 5,
      image: require("../../assets/image/p2.jpeg"),
      name: "Paneer Tikka Pizza"
    },
  ]

  const FoodData = ({ item }) => {
    return (
      <View style={styles.card} >
        <TouchableOpacity>
          <View >
            <View >
              <Image source={item.image} style={styles.imgOfFood}></Image>
            </View>

            <View style={{ paddingLeft: 5 }}>
              <Text style={styles.foodname}>{item.name}</Text>
              <View style={styles.add}>
                <Entypo name={'location-pin'} style={styles.iconloc} />
                <Text style={styles.foodresto}>{item.location}</Text>
              </View>

            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const Hotel = [
    {
      id: 1,
      image: require("../../assets/image/food1.jpg"),
      hotelName: "Hotel Zaman Restaurant",
      hotelItem: "Fast Food, Chienese, Sandwich",
      location: "kazi Deiry, Taiger Pass",
      area: "Chittagong",
      rating: 5.0,
      onePerson: "Rs.100 for one"
    },
    {
      id: 2,
      image: require("../../assets/image/food2.jpg"),
      hotelName: "Hotel Zaman Restaurant",
      hotelItem: "Fast Food, Chienese, Sandwich, Thai Food",
      location: "kazi Deiry, Taiger Pass",
      area: "Chittagong",
      rating: 4.8,
      onePerson: "Rs.200 for one"
    },
    {
      id: 3,
      image: require("../../assets/image/food3.jpg"),
      hotelName: "Hotel Zaman Restaurant",
      hotelItem: "Fast Food, Panjabi, Sandwich",
      location: "kazi Deiry, Taiger Pass",
      area: "Chittagong",
      rating: 4.7,
      onePerson: "Rs.150 for one"
    },
    {
      id: 4,
      image: require("../../assets/image/food4.jpg"),
      hotelName: "Hotel Zaman Restaurant",
      hotelItem: "Fast Food, Sandwich, South-Indian Food",
      location: "kazi Deiry, Taiger Pass",
      area: "Chittagong",
      rating: 3.5,
      onePerson: "Rs.300 for one"
    },
    {
      id: 5,
      image: require("../../assets/image/food5.jpg"),
      hotelName: "Hotel Zaman Restaurant",
      hotelItem: "Fast Food, Chienese, Sandwich, Pizza",
      location: "kazi Deiry, Taiger Pass ",
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
          <View style={{ position: 'relative', alignItems: "center", justifyContent: "center", alignSelf: "center" }}>
            <ImageBackground style={styles.veg}>
            </ImageBackground>
            <View style={styles.vegText}>
              <Entypo name={'leaf'} style={{ marginRight: 5, fontSize: 16, }} />
              <Text style={{ textAlign: "center", fontWeight: "700" }}>PURE VEG RESTAURANT</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginRight: 10, marginLeft: 10, justifyContent: "space-between" }}  >
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

        <View style={styles.bar}>
          <Feather name={'menu'} style={styles.iconmenu} />
          <View style={{ flexDirection: 'row' }}>
            <Entypo name={'location-pin'} style={styles.iconlocation} />
            <Text style={styles.locat}>Agrabad 435, Chittagong</Text>
          </View>
          <Image source={require("../../assets/image/boyimage.jpg")} style={styles.boy} />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18 }}>
          <View style={styles.searchbox} >
            <Feather name={'search'} style={styles.searchicon} />
            <TextInput style={styles.searchtext} placeholder="Search" />
          </View>
        </View>

        <View>
          <FlatList
            // numColumns={1}
            horizontal
            data={Slider}
            renderItem={SliderData}
            keyExtractor={item => item.id}
          >
          </FlatList>
        </View>

        <View style={styles.doticon}>
          <Entypo name={'dot-single'} style={styles.dot} />
          <Entypo name={'dot-single'} style={styles.dot1} />
          <Entypo name={'dot-single'} style={styles.dot2} />
        </View>

        <View style={styles.heading}>
          <View>
            <Text style={styles.listhead1}>Eat what makes you Happy</Text>
          </View>

        </View>

        <View >
          <FlatList
            numColumns={4}
            // horizontal
            data={Menu}
            renderItem={MenuData}
            keyExtractor={item => item.id}
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

        <View style={styles.heading}>
          <View>
            <Text style={styles.listhead}>Today New Arivable</Text>
            <Text style={styles.list}>Best of the today food list update</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.all}>
              <Text style={styles.see}>See All</Text>
              <AntDesign name={'right'} style={styles.arrow} />
            </TouchableOpacity>
          </View>

        </View>

        <View>
          <FlatList
            // numColumns={1}
            horizontal
            data={Food}
            renderItem={FoodData}
            keyExtractor={item => item.id}
          >
          </FlatList>
        </View>

        <View style={styles.heading}>
          <View>
            <Text style={styles.listhead}>Restaurants Around You</Text>
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
  bar: {
    // display:"inline"
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  iconmenu: {
    fontSize: 25,
    color: "black",
  },
  iconlocation: {
    fontSize: 20,
    color: colors.primary,
    textAlign: "center"
  },
  locat: {
    color: "#4B5563",
    fontSize: 12,
    marginTop: 2,
    marginLeft: 3
  },
  boy: {
    height: 32,
    width: 32,
    borderRadius: 32
  },
  searchbox: {
    height: 36,
    width: 280,
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
    fontSize: 15,
    color: '#9CA3AF',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 27

  },
  sliderimg: {
    marginTop: 28,
    height: 130,
    // width:300,
    borderRadius: 20,
    marginLeft: 11,
    marginRight: 11,
    // padding:20
  },
  sliderbar: {
    marginLeft: 22
  },
  doticon: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    position: "relative"
  },
  dot: {
    color: colors.primary,
    fontSize: 40,
    // position:"absolute",
    padding: 0
  },
  dot1: {
    color: "#E2E2E2",
    fontSize: 40,
    position: "absolute",
    padding: 0
  },
  dot2: {
    color: "#E2E2E2",
    fontSize: 40,
    padding: 0
  },
  heading: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 30
  },
  listhead: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "700"

  },
  list: {
    color: colors.secondarytext
  },
  all: {
    flexDirection: "row",
    // marginTop:10

  },
  see: {
    color: colors.secondarytext,
    marginTop: 8,
    marginRight: 3,
    // fontSize:12
  },
  arrow: {
    color: colors.secondarytext,
    marginTop: 12,
    fontSize: 12

  },
  Fmenu: {
    // alignItems:'center',

    justifyContent: "space-between",
    flexDirection: "row"

  },
  imgOfmenuFood: {
    height: 80,
    width: 80,
    borderRadius: 80,
    marginBottom: 10,
    marginTop: 20,
    // flexDirection:'row',
    alignItems: "center",
    // justifyContent:"center",
    borderColor: colors.primary,
    borderWidth: 2

  },
  menucard: {
    // display:"flex",
    position: "relative",
    // marginLeft:10,
    height: 140,
    width: 88,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    marginRight: 12,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
  },
  Fname: {
    color: colors.secondaryhead,
    fontSize: 12,
    fontWeight: "500",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"

  },
  listhead1: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10

  },

  card: {
    // display:"flex",
    position: "relative",
    // marginLeft:10,
    height: 220,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 20,
    marginTop: 20
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
    // marginTop: 16,
    height: 140,
    width: 150,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10


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
    borderWidth: 0,
    borderRadius: 20,
    borderColor: "grey",
    marginTop: 20,
    backgroundColor: "#fff",

  },
  foodimg: {
    height: 250,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 20,
    shadowColor: 'red',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 3,

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
    paddingLeft: 8,
    paddingTop: 2,
    fontSize: 14,
  },
  p1: {
    color: colors.secondarytext,
    fontSize: 12,
    fontWeight: "600"
  },
  Frate: {
    position: "relative",
    alignSelf: "flex-end"

  },
  star: {
    color: "white",
    fontSize: 13,
    position: "absolute",
    top: 5,
    left: 25,
    marginLeft: 4,

  },
  veg: {
    backgroundColor: colors.primary,
    height: 25,
    width: "100%",
    opacity: 0.8,
    position: "absolute",
    top: -270,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,


  },
  vegText: {
    flexDirection: "row",
    textAlign: "center",
    position: "absolute",
    top: -270,
    // justifyContent:"center",
    alignItems: "center",
    marginTop: 2

  }

})