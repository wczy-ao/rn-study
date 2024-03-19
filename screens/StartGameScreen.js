import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton style={{color:"red"}}>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  // Page:{
  //     width:300,
  //     height:50,
  //     fontSize:20
  // }
});

export default StartGameScreen;
