import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import ClubsStudentsListScreen from '../Screens/ClubsStudentsListScreen';

const Stack = createStackNavigator();
export default function HomeNavigation() {
	return (
		<Stack.Navigator screenOptions={{headerShown:false}}>
			{/* by default */}
			<Stack.Screen
				name='Home'
				component={Home}
			/>
			<Stack.Screen
				name='Club-students-listScreen'
				component={ClubsStudentsListScreen}
			/>
		</Stack.Navigator>
	)
}