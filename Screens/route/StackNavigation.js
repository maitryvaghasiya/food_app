
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onbrd from '../container/Onbrd';
import Home from '../container/Home';
import PizzaD from '../container/PizzaD';
import PizzaLnozz from '../container/PizzaD';
import LogIn from '../container/SignUp';
import Otp from '../container/Otp';
import Setting from '../container/Setting';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

// const Onboarding = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="onboard" component={Onbrd} />
//             {/* <Stack.Screen name="PizzaD" component={PizzaD} /> */}
//         </Stack.Navigator>
//     )
// }

// const LogInScrn = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="log" component={LogIn} />
//             <Stack.Screen name="otp" component={Otp} />
//         </Stack.Navigator>
//     )
// }


const FoodStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onboard" component={Onbrd} />
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
const SettingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
    )
}
export { FoodStack, Dining, Offers,SettingStack}