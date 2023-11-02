import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View , Button} from 'react-native';
import Header from './src/components/header';
import Timer from './src/components/Timer';
import MyButton from './src/components/MyButton';
import {Audio} from 'expo-av';

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"];

export default function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(25*60);
    const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
    const [isActive, setIsActive] = useState(false);

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
            <View style={styles.view}>
                <Text style={styles.text}>Pomodoro App</Text>
                <Header 
                    currentTime = {currentTime}
                    setCurrentTime = {setCurrentTime}
                    setTime = {setTime}
                />
                <Timer 
                    time={time}
                />
                <MyButton 
                    isActive={isActive}
                    setIsActive={setIsActive}
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
        paddingHorizontal:15,
        flex: 1,
    },
});
