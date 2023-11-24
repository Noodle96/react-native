import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function ClubsStudentsListScreen() {
	const param = useRoute().params;
	return (
	<View>
		<Text>{param?.categoryName}</Text>
	</View>
	)
}