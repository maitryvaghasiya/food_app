import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Counter from '../container/Counter';
import Post from '../container/Post';
import { Dining, FoodStack, Offers, SettingStack } from './StackNavigation';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
    return (
        <Tab.Navigator
            
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Delivery') {
                    iconName = focused
                    return <MaterialIcons name={'delivery-dining'} size={30} color={color} />;    
                  } else if (route.name === 'Cart') {
                    iconName = focused 
                    return <MaterialCommunityIcons name={"food-outline"} size={22} color={color}/>
                  } else if (route.name === 'Menu') {
                    iconName = focused 
                    return <FontAwesome5 name={'clipboard-list'} size={23} color={color} />;
                  } else if (route.name === 'Setting') {
                    iconName = focused 
                    return <Ionicons name={'file-tray-full-sharp'} size={22} color={color} />;
                  }
      
                //   return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#32B768',
                tabBarInactiveTintColor:"#6B7280",

                headerShown: false,
              })}

        >
            <Tab.Screen name="Delivery" component={FoodStack} />
            <Tab.Screen name="Cart" component={Dining} />
            <Tab.Screen name="Menu" component={Offers} />
            <Tab.Screen name="Setting" component={SettingStack} />
            {/* <Tab.Screen name="counter" component={Counter} />
            <Tab.Screen name="post" component={Post} /> */}

        </Tab.Navigator>
    )
}





