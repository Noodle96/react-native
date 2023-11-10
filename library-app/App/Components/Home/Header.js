import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
	const {isLoaded, isSignedIn,user} = useUser();
	if(!isLoaded || !isSignedIn) return null;
	return (
		<View>
			<View>
				<Image
					source={{uri:user.imageUrl}}
					style={styles.image}
				/>
				<View>
					<Text style={{fontSize:13,}}>Hola, 👋</Text>
					<Text style={styles.textFullName}>{user.fullName}</Text>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	image:{
		width:45,
		height:45,
		borderRadius:15,
	},
	textFullName:{
		fontSize:15,
		fontWeight: 'bold',
	},
});