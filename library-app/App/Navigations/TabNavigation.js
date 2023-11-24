import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../Screens/Profile';
import Appointment from '../Screens/Appointment';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../assets/Shared/Colors';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
	return (
		// screenOptions={{headerShown: false}}
		<Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor:Colors.PRIMARY}}>
			<Tab.Screen
				name="HomeNavigation"
				component={HomeNavigation}
				options={{tabBarIcon:({color,size})=>(
					<Ionicons name="home" size={size} color={color} />
				)}}
			/>
			<Tab.Screen
				name="Appointment"
				component={Appointment}
				options={{tabBarIcon:({color,size})=>(
					<Ionicons name="calendar" size={size} color={color} />
				)}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{tabBarIcon:({color,size})=>(
					<FontAwesome5 name="user-cog" size={size} color={color} />
				)}}
			/>
		</Tab.Navigator>
	)
}