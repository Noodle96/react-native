import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Appointment from '../Screens/Appointment';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Login from '../Screens/Login';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
	return (
		// screenOptions={{headerShown: false,}}
		<Tab.Navigator >
			<Tab.Screen name="Home" component={Home}/>
			<Tab.Screen name="Profile" component={Profile}/>
			<Tab.Screen name="Appointment" component={Appointment}/>
		</Tab.Navigator>
	)
}