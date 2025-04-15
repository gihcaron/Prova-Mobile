import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Flavia from './pages/Flavia';
import Giovanna from './pages/Giovanna';
import Amanda from './pages/Amanda';
import Anaju from './pages/AnaJu';
import Julia from './pages/Julia';

const Tab = createBottomTabNavigator();

 export default function TabNavigator() {
  return (
   <Tab.Navigator initialRouteName='Flavia'>
    
        
        <Tab.Screen
        name="Flavia"
        component={Flavia}
        options={{
            tabBarLabel:'Flavia',
            tabBarIcon: ({color,size}) => (
                <Icon name='home' color={color} size={size} />
            ),
        }}
        />

        <Tab.Screen
        name="Giovanna"
        component={Giovanna}
        options={{
            tabBarLabel:'Giovanna',
            tabBarIcon: ({color,size}) => (
                <Icon name='home' color={color} size={size} />
            ),
        }}/>

        <Tab.Screen
        name="Amanda"
        component={Amanda}
        options={{
            tabBarLabel:'Amanda',
            tabBarIcon: ({color,size}) => (
                <Icon name='home' color={color} size={size} />
            ),
        }}/>

        <Tab.Screen
        name="AnaJu"
        component={Anaju}
        options={{
            tabBarLabel:'Anaju',
            tabBarIcon: ({color,size}) => (
                <Icon name='home' color={color} size={size} />
            ),
        }}/>

        <Tab.Screen
        name="Julia"
        component={Julia}
        options={{
            tabBarLabel:'Julia',
            tabBarIcon: ({color,size}) => (
                <Icon name='home' color={color} size={size} />
            ),
        }}/>

       
    </Tab.Navigator>
    
  );
}

