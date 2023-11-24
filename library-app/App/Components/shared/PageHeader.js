import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/Shared/Colors';

export default function PageHeader({title}) {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={()=>navigation.goBack()}>
				<Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
			</TouchableOpacity>
			<Text style={styles.textStyle}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		marginTop:30,
		padding:20,
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'flex-start',
		gap:10,
	},
	textStyle:{
		fontSize:24,
		fontFamily:'Montserrat-Bold',
	}
});
