import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './Screens/route/BottomNavigation';
import PizzaD from './Screens/container/Example';
import Home from './Screens/container/Example';
import PizzaLnozz from './Screens/container/Example';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import 'react-native-gesture-handler';
import { Drawernavigation } from './Screens/route/BottomNavigation';
import Onbrd from './Screens/container/Example';
import { Provider } from 'react-redux';
import { store } from './Screens/redux/store';
import Example from './Screens/container/Example';
import Post from './Screens/container/Post';
import LogIn from './Screens/container/SignUp';
import Otp from './Screens/container/Otp';

export default function App() {
  // const store = configStore()

  return (
    <Provider store={store}>
      <NavigationContainer>
      <BottomNavigation />
      </NavigationContainer>  
      {/* <Example/>  */}
      {/* <Post /> */}
      {/* <LogIn /> */}
      {/* <Otp/> */}
    </Provider>
    //  <PizzaD /> 
    //  <Home /> 
    //  <PizzaLnozz /> 
    //  <Onbrd />     
  )
}



