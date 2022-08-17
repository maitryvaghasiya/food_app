
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import PizzaD from './PizzaD';
import PizzaM from './PizzaM';

const Stack = createNativeStackNavigator();

const FoodStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Pizza" component={PizzaD} />
        </Stack.Navigator>
    )
}

const Dining = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dining" component={PizzaM} />
        </Stack.Navigator>
    )
}
export { FoodStack, Dining }