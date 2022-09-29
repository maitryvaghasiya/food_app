import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './Screens/route/BottomNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PizzaD from './Screens/container/PizzaD';
import Home from './Screens/container/Home';
import PizzaLnozz from './Screens/container/PizzaLnozz';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import 'react-native-gesture-handler';
import { Drawernavigation } from './Screens/route/BottomNavigation';
import Onbrd from './Screens/container/Onbrd';
import { Provider } from 'react-redux';
import { store } from './Screens/redux/store';
import Example from './Screens/container/Example';
import Post from './Screens/container/Post';
import LogIn from './Screens/container/LogIn';
import WelcomePage from './Screens/container/WelcomePage';
import ForgetPass from './Screens/container/ForgetPass';
import Otp from './Screens/container/Otp';
import Password from './Screens/container/Password';
import Setting from './Screens/container/Setting';
import { Onboarding } from './Screens/route/StackNavigation';

export default function App() {
  const Stack = createNativeStackNavigator();

  // const store = configStore()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="onbrd"
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="mainscreen" component={BottomNavigation} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>

      {/* <NavigationContainer>
       <BottomNavigation /> 
     </NavigationContainer>    */}

      {/* <Example/> */}
      {/* <Post /> */}

      {/* <PizzaD/> */}
      {/* <LogIn/> */}
      {/* <WelcomePage/> */}
      {/* <Otp/> */}
      {/* <ForgetPass/> */}
      {/* <Password/> */}
      {/* <Setting /> */}
      {/* <Onbrd/> */}
    </Provider>

    //  <PizzaD /> 
    //  <Home /> 
    //  <PizzaLnozz /> 
    //  <Onbrd /> 

  )
}



