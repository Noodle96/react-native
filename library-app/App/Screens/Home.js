import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';

export default function Home() {
	const { isLoaded,signOut } = useAuth();
	return (
		<View>
			<Text>Home</Text>
			<Button title='SignOut' onPress={()=>{signOut();}} ></Button>
		</View>
	)
}
