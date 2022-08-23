
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import PizzaD from './PizzaD';
import PizzaLnozz from './PizzaLnozz';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

const FoodStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PizzaD" component={PizzaD} />
        </Stack.Navigator>
    )
}

const Dining = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dining" component={PizzaLnozz} />
        </Stack.Navigator>
    )
}
const Offers = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Offers" component={PizzaD} />
        </Stack.Navigator>
    )
}
const Money = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Money" component={PizzaLnozz} />
        </Stack.Navigator>
    )
}
export { FoodStack, Dining, Offers, Money}