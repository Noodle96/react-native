import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi';

export default function Cursos() {
	const [cursoList, setCursoList] = useState();
	useEffect(()=>{
		getCursos();
	},[]);
	const getCursos  = () => {
		GlobalApi.getCursos().then(resp=>{
			setCursoList(resp.data.data);
		});
	};
	if(!cursoList)return null;
	return (
		<View style={styles.container}>
			<Text>Cursos</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container:{
		marginTop:10,
	}
});