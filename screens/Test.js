import { Text, View, StyleSheet } from "react-native";

const Test1 = () => {
  return (
    <View style={Styles.container}>
      <Text>Test1</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Test1;
