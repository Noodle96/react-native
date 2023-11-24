import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/shared/PageHeader';

export default function ClubsStudentsListScreen() {
	const param = useRoute().params;
	return (
	<View>
		<PageHeader 
			title={param?.categoryName}
		/>
	</View>
	)
}