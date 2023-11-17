import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors';

export default function ClubEstudianteItem({dataClubEstudiante}) {
	return (
		<View style={styles.container}>
			<Image
				source={{uri:dataClubEstudiante.attributes.imageClub.data.attributes.url}}
				style={styles.image}
			/>
			<View style={styles.information}>
				<Text style={styles.nameClub}>{dataClubEstudiante.attributes.nombreClub}</Text>
				<Text style={styles.responsableClub}>{dataClubEstudiante.attributes.responsableClub}</Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container:{
		width:200,
		borderWidth:1,
		borderColor:Colors.GRAY,
		borderRadius: 10,
		marginRight:6,
	},
	image:{
		width:'100%',
		height:110,
		borderTopLeftRadius:10,
		borderTopRightRadius:10,
	},
	information:{
		padding:7
	},
	nameClub:{
		fontSize:16,
		fontFamily: 'Montserrat-ExtraBold',
		color:Colors.PRIMARY
	},
	responsableClub:{
		fontFamily: 'Montserrat-Italic',
		color:Colors.GRAY2
	}
});