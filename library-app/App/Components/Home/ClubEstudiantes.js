import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import GlobalApi from '../../Services/GlobalApi'
import ClubEstudianteItem from './ClubEstudianteItem';

export default function ClubEstudiantes() {
	const [listClubEstudiantes, setListClubEstudiantes] = useState([]);
	useEffect(()=>{
		getClubEstudiantes();
	},[]);
	const getClubEstudiantes = () =>{
		GlobalApi.getClubEstudiantes().then(resp=>{
			// console.log(resp.data.data);
			setListClubEstudiantes(resp.data.data);
		})
	}
	return listClubEstudiantes && (
		<View style={styles.container}>
			<SubHeading subHeadingTitle={"Club Estudiantes"}/>
			<FlatList
				data={listClubEstudiantes}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({item,index})=>(
					<ClubEstudianteItem
						dataClubEstudiante={item}
					/>
				)}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	container:{
		marginTop:10
	},
	image:{
		width:Dimensions.get('screen').width,
		height:170,
		borderRadius:10,
		margin:.5,
	}
});