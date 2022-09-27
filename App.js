import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './Screens/route/BottomNavigation';
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

export default function App() {
  // const store = configStore()

  return (
    <Provider store={store}>
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
  <Password/>
    </Provider>
    
//  <PizzaD /> 
//  <Home /> 
//  <PizzaLnozz /> 
//  <Onbrd /> 
    
  )
}



