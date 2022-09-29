
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onbrd from '../container/Onbrd';
import Home from '../container/Home';
import PizzaD from '../container/PizzaD';
import PizzaLnozz from '../container/PizzaD';
import SearchScrn from '../container/SearchScrn';
import Setting from '../container/Setting';
import LogIn from '../container/LogIn';
import ForgetPass from '../container/ForgetPass';
import WelcomePage from '../container/WelcomePage';
import Password from '../container/Password';
import Otp from '../container/Otp';
import AddtoCart from '../container/AddtoCart';
import Menu from '../container/Menu';

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
        <Stack.Navigator independent={true} >
            <Stack.Screen name="Onboard" component={Onbrd} options={{ headerShown: false }}/>
            <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }}/>
            <Stack.Screen name="ForgetPass" component={ForgetPass} options={{ headerShown: false }}/>
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }}/>
            <Stack.Screen name="Welcome" component={WelcomePage}  options={{ headerShown: false }}/>
            <Stack.Screen name="Password" component={Password} options={{ headerShown: false }}/>
            <Stack.Screen name="f1" component={FoodStack} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

const FoodStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="PizzaD" component={PizzaD} options={{ headerShown: false }}/>
            <Stack.Screen name="Search" component={SearchScrn} />
            
        </Stack.Navigator>
    )
}

const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={AddtoCart} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}
const MenuList = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}
const SettingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}
export { FoodStack,CartStack, MenuList, SettingStack, Onboarding}