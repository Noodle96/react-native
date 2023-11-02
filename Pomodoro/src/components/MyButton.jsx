import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

export default function MyButton({isActive, setIsActive}) {
	async function playSound(){
		const {sound} = await Audio.Sound.createAsync(
			require("../../assets/click.mp3")
		);
		await  sound.playAsync();
	}

	function handleStartStop(){
		playSound();
		setIsActive(!isActive);
	}
	return (
		<TouchableOpacity style={styles.buttonStyle} onPress={handleStartStop}>
			<Text style={styles.textStyle}>
				{isActive?"STOiP":"START"}
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