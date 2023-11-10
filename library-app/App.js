import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import Colors from './assets/Shared/Colors';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Config from './assets/Shared/Config';
import SignInWithOAuth from './App/Components/SignInWithOAuth';
import Home from './App/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import Profile from './App/Screens/Profile';
import Appointment from './App/Screens/Appointment';

export default function App() {
  const publicKey = Config.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  // console.log(publicKey);
  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={[styles.view]}>
    //     <Login

    //     />
    //   </View>
    // </SafeAreaView>
    <ClerkProvider publishableKey={publicKey}>
      <SafeAreaView style={styles.container}>
        {/* <StatusBar hidden /> */}
        {/* <SignedIn> */}
          {/* <Text>You are Signed out</Text> */}
          {/* <SignInWithOAuth /> */}
          {/* <Text>You are Signed in</Text> */}
          {/* <Home /> */}
          {/* <Profile /> */}
          {/* <Appointment /> */}
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        {/* </SignedIn> */}
          
        {/* <SignedOut>
          <Login />
        </SignedOut> */}
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    paddingTop: Platform.OS === "android" && 30,
  }
});
