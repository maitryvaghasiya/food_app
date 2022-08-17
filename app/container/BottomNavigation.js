import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dining, FoodStack } from './StackNavigation';


const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Delivery" component={FoodStack} />
            <Tab.Screen name="Dining" component={Dining} />
        </Tab.Navigator>
    )
}





