import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';
import Slider from '../Components/Home/Slider';

export default function Home() {
	const { isLoaded,signOut } = useAuth();
	const [searchText, setSearchText] = useState("");
	return (
		<View style={styles.view}>
			<Header />
			<SearchBar
				setSearchText = {setSearchText}
			/>
			{/* <Text>Se esta buscando: {searchText}</Text> */}
			<Slider />



			{/* <Text>Home</Text> */}
			{/* <Button title='SignOut' onPress={()=>{signOut();}} ></Button> */}
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		// flexDirection: 'row',
		padding:11,
		marginTop: 25,
	}
});
