import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';
import Slider from '../Components/Home/Slider';
import Cursos from '../Components/Home/Cursos';
import ClubEstudiantes from '../Components/Home/ClubEstudiantes';

export default function Home() {
	const { isLoaded,signOut } = useAuth();
	const [searchText, setSearchText] = useState("");
	return (
		<ScrollView style={styles.view}>
			<Header />
			<SearchBar
				setSearchText = {setSearchText}
			/>
			{/* <Text>Se esta buscando: {searchText}</Text> */}
			<Slider />

			<View style={styles.container}>
				<Cursos />
			</View>
			
			<View style={styles.container}>
				<ClubEstudiantes />
			</View>

			<View style={styles.container}>
				<ClubEstudiantes />
			</View>
			

			{/* <Text>Home</Text> */}
			{/* <Button title='SignOut' onPress={()=>{signOut();}} ></Button> */}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	view: {
		// flexDirection: 'row',
		flex:1,
		padding:11,
		marginTop: 25,
	},
	container: {
		flex: 1,
	},
});
