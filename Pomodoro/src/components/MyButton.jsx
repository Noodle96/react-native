import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

export default function MyButton({isActive, setIsActive, time, setTime, isRunning, setIsRunning}) {

	async function playSoundAlerta(){
		const {sound} = await Audio.Sound.createAsync(
			require("../../assets/alerta.mp3")
		);
		await  sound.playAsync()
	}
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
			// console.log("time 00");
			setIsActive(false);
			// console.log("1: ", isRunning);
			// setIsRunning(!isRunning);
			// setIsRunning((prev) => !prev);
			// console.log("2: ", isRunning);
			// setTime(isRunning?300:1500);
			//setTime(0);
			// console.log("it is all");
			playSoundAlerta();
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