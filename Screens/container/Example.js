import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

export default function Example() {
    const first=() => {
        return "First Ans"
    }
    const sec=() => {
        return "Second Ans"
    }
    const third=() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Third Ans"),3000)
        })
        // return "Third Ans"
    }

    const All = async () =>{
        const firstAns = first();
        console.log(firstAns);

        const secAns = sec();
        console.log(secAns);

        const thirdAns = await third();
        console.log(thirdAns);
    }
    useEffect(() => {
        All()
    },[])

    const print = (c) => {
        console.log(c);
    }

    const sum = (a,b,callback) => {
        let c = a+b;

        callback(c)
    }
    sum (10, 20, print)

  return (
    <View>
      <Text>Example</Text>
    </View>
  )
}