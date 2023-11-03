import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import PrincipalImage from '../../assets/screen.png';
import Colors from '../../assets/Shared/Colors';
export default function Login() {
	return (
		<View style={styles.viewGeneral}>
			<Image style={styles.imageStyle} source={PrincipalImage}/>
			<View style={styles.viewInside}>
				<Text style={styles.heading}>Your Ultimate Doctor</Text>
				<Text style={styles.heading}>Appointment Booking App</Text>
				<Text style={styles.message}> aaaaa bbbbb ccccc ddddd eeeee fffff ggggg hhhhh </Text>
				<TouchableOpacity style={styles.button}>
				<Text style={styles.textLogin}>Login with Google</Text>
			</TouchableOpacity>
			</View>
		</View>
		
	)
}
const styles = StyleSheet.create({
	viewGeneral: {
		alignItems:'center',
		backgroundColor: Colors.opaco,
	},
	imageStyle: {
		width: 300,
		height: 500,
		objectFit: 'contain',
		marginTop:20,
	},
	viewInside: {
		width: '100%',
		marginTop: -60,
		backgroundColor: Colors.white,
		padding: 25,
		alignItems:'center',
		// elevation: 1,
		borderTopLeftRadius:20,
		borderTopRightRadius:20
		// backgroundColor: "#0000FF",
	},
	heading: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	message: {
		textAlign: 'center',
		marginTop:20,
	},
	button: {
		backgroundColor: Colors.PRIMARY,
		padding:12,
		borderRadius:90,
		alignItems: 'center',
		marginTop:20,
		width: Dimensions.get('screen').width*0.8,
	},
	textLogin: {
		fontSize: 17,
		color: Colors.white,
		fontWeight: 'bold',
	},
});