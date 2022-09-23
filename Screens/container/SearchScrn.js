import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBar from "react-native-dynamic-search-bar";

export default function SearchScrn() {
  return (
    <ScrollView>      
            <View style={styles.container}> 
                    <SearchBar
                        placeholder="Search here"
                        onPress={() => alert("onPress")}
                        onChangeText={(text) => console.log(text)}
                        style={{
                            marginTop:20,
                            backgroundColor:"#ECECEC",
                            width:"100%", 
                            borderBottomColor:"grey",
                            borderBottomWidth:1,
                            marginTop:5
                        }}
                        searchIconImageStyle={{
                            height:15,
                            width:15
                        }}
                        clearIconImageStyle={{
                            height:10,
                            width:10,
                        }}
                        placeholderTextColor="grey"	
                        shadowColor="#366740"
                    />
            </View>
        </ScrollView>
  )
}

let styles=StyleSheet.create({
  
    container:{
        margin:14,
    },
})