import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
	const {isLoaded, isSignedIn,user} = useUser();
	if(!isLoaded || !isSignedIn) return null;
	return (
		<View style={styles.container} >
			<View style={styles.viewPersonal}>
				<Image
					source={{uri:user.imageUrl}}
					style={styles.image}
				/>
				<View>
					<Text style={{fontSize:13,}}>Hola, 👋</Text>
					<Text style={styles.textFullName}>{user.fullName}</Text>
				</View>
			</View>
			<Ionicons name="notifications-outline" size={24} color="black" />
		</View>
	)
}
const styles = StyleSheet.create({
	container:{
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
	},
	viewPersonal:{
		display:'flex',
		flexDirection:'row',
		gap:10,
		alignItems:'center',
	},
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