import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';

export default function Home() {
	const { isLoaded,signOut } = useAuth();
	return (
		<View style={styles.view}>
			<Header 

			/>
			{/* <Text>Home</Text> */}
			{/* <Button title='SignOut' onPress={()=>{signOut();}} ></Button> */}
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
		padding:20,
		marginTop: 25,
	}
});
