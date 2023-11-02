import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

export default function MyButton({isActive, setIsActive, time, setTime, isRunning, setIsRunning}) {

	useEffect(()=>{
		let interval = null;
		if(isActive){ //run timer
			interval = setInterval(() => {
				setTime(time-1);
			}, 1);
		}else{ //limpiar el interval
			clearInterval(interval);
		}
		if(time === 0){
			setIsActive(false);
			// setIsRunning(!isRunning);
			setIsRunning((prev) => !prev);
			setTime(isRunning?300:1500);
		}
		return ()=>clearInterval(interval);
	},[isActive, time]);

	async function playSound(){
		const {sound} = await Audio.Sound.createAsync(
			require("../../assets/click.mp3")
		);
		await  sound.playAsync()
	}
	function handleStartStop(){
		playSound();
		setIsActive(!isActive);
	}
	return (
		<TouchableOpacity style={styles.buttonStyle} onPress={handleStartStop}>
			<Text style={styles.textStyle}>
				{isActive?"STOP":"START"}
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