import React from "react";
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'Aboba' },
		{ name: 'Tim' },
		{ name: 'Tim2' },
		{ name: 'Tim3' },
		{ name: 'Alex' },
		{ name: 'Alex2' },
		{ name: 'Alex3' },
		{ name: 'Alex4' },
		{ name: 'Alex6' },
		{ name: 'Alex7' },
		{ name: 'Alex23' },
		{ name: 'Alex43' },
		{ name: 'Alex64' },
		{ name: 'Alex74' },
	];

	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator = {false}
			keyExtractor={(friend) => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>{item.name}</Text>
				)
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50
	}
})

export default ListScreen;