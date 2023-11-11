import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi';

export default function Slider() {
	const [sliderList, setSliderList] = useState();
	// const sliderList = [
	// 	{
	// 		id: 1,
	// 		name: 'slider 01',
	// 		imageUrl: 'https://img.freepik.com/foto-gratis/abundante-coleccion-libros-antiguos-estantes-madera-generados-ia_188544-29660.jpg?w=1380&t=st=1699655794~exp=1699656394~hmac=09cdce1b23a05a841b63cc4ff032d753a7682d20e13a2b1ab83468c5f144b473',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'slider 02',
	// 		imageUrl: 'https://img.freepik.com/foto-gratis/retrato-joven-que-estudia-literatura-biblioteca-generado-ia_188544-28137.jpg?w=1380&t=st=1699655943~exp=1699656543~hmac=6ea6631c8523404b8feabd01179ae04a923900a4e26769c6d79fd6263fabddcd',
	// 	},
	// ];

	useEffect(()=>{
		getSlider();
	},[]);

	const getSlider = () => {
		GlobalApi.getSlider().then(resp=>{
			// console.log(resp.data.data);
			setSliderList(resp.data.data)
		})
	}
	return (
		<View style={styles.container}>
			<FlatList 
				data={sliderList}
				horizontal={true}
				renderItem={({item})=>(
					<Image 
						// source={{uri:item.imageUrl}}
						source={{uri:item.attributes.image.data.attributes.url}}
						style={styles.image}
					/>
				)}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	container:{
		marginTop:15,
	},
	image:{
		width:Dimensions.get('screen').width,
		height:170,
		borderRadius:10,
		margin:.5,
	}
});