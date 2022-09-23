
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onbrd from '../container/Onbrd';
import Home from '../container/Home';
import PizzaD from '../container/PizzaD';
import PizzaLnozz from '../container/PizzaD';
import SearchScrn from '../container/SearchScrn';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

const Onboarding = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onboard" component={Onbrd} />
            {/* <Stack.Screen name="PizzaD" component={PizzaD} /> */}
        </Stack.Navigator>
    )
}

const FoodStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PizzaD" component={PizzaD} />
            <Stack.Screen name="Search" component={SearchScrn} />
            
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
export { FoodStack, Dining, Offers, Money,Onboarding}