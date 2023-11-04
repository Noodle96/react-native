import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import Colors from './assets/Shared/Colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.view]}>
        <Login

        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  view: {
    paddingTop: Platform.OS === "android" && 30,
  }
});
