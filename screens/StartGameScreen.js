import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [inpNum, setInpNum] = useState("");
  const onChangeText = (value) => {
    setInpNum(value);
  };
  const onReset = () => {
    setInpNum("");
  };
  const onConfirm = () => {
    const num = +inpNum;
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert(
        "猜错了，超出范围了",
        "Number has to be a number between 1 and 99.",
        [{ text: "确认", style: "destructive", onPress: onReset }]
      );
      return;
    }
    onPickNumber(num);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        keyboardType="phone-pad"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={3}
        value={inpNum}
        onChangeText={(text) => onChangeText(text)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onConfirm}>Confirm</PrimaryButton>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          fadeDuration={1300}
          style={styles.image}
          // source={require('./assets/images/background.png')}
          source={{
            uri: "https://doc.houdunren.com/assets/img/logo.b46834f8.png",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 200,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default StartGameScreen;
