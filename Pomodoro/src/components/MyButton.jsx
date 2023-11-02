import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MyButton({isActive, setIsActive}) {
	function handleStartStop(){
		setIsActive(!isActive);
	}
	return (
		<TouchableOpacity style={styles.buttonStyle} onPress={handleStartStop}>
			<Text style={styles.textStyle}>
				{isActive?"STOPpoo":"START"}
			</Text>
		</TouchableOpacity>	
	);
}

const styles = StyleSheet.create({
	textStyle: {
		color: "white",
		fontWeight: "bold",
	},
	buttonStyle: {
		backgroundColor: "#333333",
		padding: 12,
		marginTop: 15,
		borderRadius: 16,
		alignItems: "center",
	},
});