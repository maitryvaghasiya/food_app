// 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
import React, { useEffect } from 'react'
import { View,Text,TouchableOpacity } from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../redux/action/counter.action";

export default function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const category = useSelector(state => state.category)

    console.log(category);

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    // useEffect(() => {
    //     dispatch(getCategory())
    // },[])

    return(
        <View>
            <TouchableOpacity onPress={() => handleIncrement()}>
                <Text style={{color:"black", margin:30,fontSize:20}}>+</Text>
            </TouchableOpacity>
    
            <Text style={{color:"black", margin:30,fontSize:20}}>{counter.count}</Text>
    
            <TouchableOpacity onPress={() => handleDecrement()}>
                <Text style={{color:"black", margin:30,fontSize:20}}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

