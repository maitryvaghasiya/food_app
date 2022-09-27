import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Setting({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
                <Text style={{ color: "black", fontSize: 16, margin: 20 }}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{ color: "black", fontSize: 16, margin: 20 }}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}