import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View , Button} from 'react-native';
import Header from './src/components/header';

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"];

export default function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(25*60);
    const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
    // console.log('====================================');
    // console.log(isRunning);
    // console.log(time);
    // console.log(currentTime);
    // console.log('====================================');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>Pomodoro App</Text>
                <Text style={styles.text}>{time}</Text>
                <Header 
                    currentTime = {currentTime}
                    setCurrentTime = {setCurrentTime}
                    setTime = {setTime}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
    },
    view: {
        paddingTop: Platform.OS === "android" && 30,
    },
});
