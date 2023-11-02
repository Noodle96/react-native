import { TouchableOpacity, View, Text, StyleSheet} from "react-native";

const tabs = ["Pomodoro","Short Break","Long Break"];

export default function Header({currentTime, setCurrentTime, setTime}) {
	function handlePressed(index){
		// console.log("TouchableOpacity Pressed ", tabs[index]);
		const newTime = index === 0 ? 25: index === 1 ? 5 :  15;
		setTime(newTime*60);
		setCurrentTime(index)
	}
	return (
		<View style={styles.viewStyle}>
		{
			tabs.map((item, index) => (
				<TouchableOpacity key={index} style={[styles.itemStyle, currentTime != index && styles.itemborderTransparent]} onPress={() => handlePressed(index)}>
					<Text>{item}</Text>
				</TouchableOpacity>
			))
		}
		</View>
	);
}

const styles = StyleSheet.create({
	viewStyle: {
		flexDirection: "row",
	},
	itemStyle: {
		width: "33.3%",
		borderWidth: 3,
		padding: 5,
	},
	itemborderTransparent:{
		borderColor: "transparent",
	},
});

