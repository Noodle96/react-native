import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';

export default function Home() {
	const { isLoaded,signOut } = useAuth();
	return (
		<View style={{ flexDirection: 'row' }}>
			<Text>Home</Text>
			<Button title='SignOut' onPress={()=>{signOut();}} ></Button>
		</View>
	)
}
