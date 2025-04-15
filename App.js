import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tab from './navigation/TabNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <Tab/>
        </NavigationContainer>
    );
}
