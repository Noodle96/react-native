import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors';

export default function SubHeading({subHeadingTitle}) {
	return (
		<View style={styles.container}>
			<Text style={styles.textCurso}>{subHeadingTitle}</Text>
			<Text style={styles.textSeeAll}>See All</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		marginBottom:10,
	},
	textCurso:{
		fontFamily:'Montserrat-ExtraBold',
		fontSize:17,
	},
	textSeeAll:{
		fontFamily:'Montserrat-ExtraBold',
		color:Colors.PRIMARY,
	},
});