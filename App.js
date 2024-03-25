import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, View } from "react-native";
// import NumberContainer from '../components/game/NumberContainer';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";

import { useFonts } from 'expo-font';

import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();


  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/icon.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
