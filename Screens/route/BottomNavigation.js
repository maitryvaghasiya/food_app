import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Counter from '../container/Counter';
import Post from '../container/Post';
import { Dining, FoodStack, Offers } from './StackNavigation';

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
                  } else if (route.name === 'Dining') {
                    iconName = focused 
                    return <Ionicons name={"restaurant"} size={22} color={color} />;
                  } else if (route.name === 'Offers') {
                    iconName = focused 
                    return <MaterialCommunityIcons name={'ticket-percent'} size={23} color={color} />;
                  } else if (route.name === 'Money') {
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
            <Tab.Screen name="Dining" component={Dining} />
            <Tab.Screen name="Offers" component={Offers} />
            <Tab.Screen name="Money" component={Dining} />
            <Tab.Screen name="counter" component={Counter} />
            <Tab.Screen name="post" component={Post} />

        </Tab.Navigator>
    )
}





