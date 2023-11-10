import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

export default function SearchBar() {
  return (
	<View style={{marginTop:15,}}>
		<View style={styles.search}>
			<Ionicons name="search-outline" size={24} color={Colors.PRIMARY} />
			<TextInput
				placeholder='Buscar'
				onChangeText={(value)=>console.log(value)}
				//con esto evitamos el desborde
				style={{ flex: 1, marginLeft: 10, width: '80%' }}
			/>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	search:{
		display:'flex',
		flexDirection:'row',
		gap:5,
		alignItems:'center',
		borderWidth:1.5,
		borderColor: Colors.GRAY,
		padding:3,
		borderRadius:10,
	}
});