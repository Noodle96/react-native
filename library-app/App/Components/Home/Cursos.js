import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi';
import Colors from '../../../assets/Shared/Colors';
import SubHeading from './SubHeading';

export default function Cursos() {
	const [cursoList, setCursoList] = useState([]);
	useEffect(()=>{
		getCursos();
	},[]);
	const getCursos  = () => {
		GlobalApi.getCursos().then(resp=>{
			setCursoList(resp.data.data);
		});
	};
	if(!cursoList){
		console.log("return null");
		return null;
	}
	return (
		<View style={styles.container}>
			<SubHeading subHeadingTitle={"Cursos"}/>
			<FlatList 
				data={cursoList}
				numColumns={5}
				columnWrapperStyle={{
					flex:1,
					justifyContent:'space-between',
				}}
				// style={styles.iconos}
				renderItem={({item,index})=>index<5 &&(
					<View style={{alignItems:'center',}}>
						<View style={styles.view2}>
							<Image
								source={{uri:item.attributes.icono.data.attributes.url}}
								style={styles.icon}
							/>
						</View>
						<Text>{item.attributes.nombre}</Text>
					</View>
				)}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	container:{
		marginTop:10,
	},
	icon:{
		width:30,
		height:30,
	},
	iconos:{
		marginTop:15,
	},
	view2:{
		backgroundColor:Colors.SECUNDARY,
		padding:10,
		borderRadius:22,
	},
});