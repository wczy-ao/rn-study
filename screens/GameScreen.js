import { View, Text, StyleSheet } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

function generateRandomBetween(min, max, exclude = 30) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  console.log(currentGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === "add" && currentGuess < userNumber) ||
      (direction === "decreate" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "add") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={()=>nextGuessHandler('decreate')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={()=>nextGuessHandler('add')}>
            +
          </PrimaryButton>
        </View>

      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
