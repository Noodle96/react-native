import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

export default function SearchBar({setSearchText}) {
	const [searchInput, setSearchInput] = useState("");
	const inputRef = useRef(null);
	const handleOnSubmitEditing = () => {
		setSearchText(searchInput);
		setSearchInput("");
		inputRef.current.clear();
	}
	return (
		<View style={{marginTop:15,}}>
			<View style={styles.search}>
				<Ionicons name="search-outline" size={24} color={Colors.PRIMARY} />
				<TextInput
					ref={inputRef} // Guarda la referencia al TextInput
					placeholder='Buscar'
					style={{ flex: 1, marginLeft: 10, width: '80%' }} //con esto evitamos el desborde
					onChangeText={(value)=>setSearchInput(value)}
					onSubmitEditing={handleOnSubmitEditing}
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