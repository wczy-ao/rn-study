import { SafeAreaView, Text, StyleSheet } from "react-native";

function Test(props) {
  const { catId } = props.route.params;
  return (
    <SafeAreaView style={styles.page}>
      <Text>Test-------{catId}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

export default Test;
// const aa = {
//   "addListener": [Function addListener],
//   "canGoBack": [Function canGoBack],
//   "dispatch": [Function dispatch],
//   "getId": [Function getId],
//   "getParent": [Function getParent],
//   "getState": [Function anonymous],
//   "goBack": [Function anonymous],
//   "isFocused": [Function isFocused],
//   "navigate": [Function anonymous],
//   "pop": [Function anonymous],
//   "popToTop": [Function anonymous],
//   "push": [Function anonymous],
//   "removeListener": [Function removeListener],
//   "replace": [Function anonymous],
//   "reset": [Function anonymous],
//   "setOptions": [Function setOptions],
//   "setParams": [Function anonymous]
// }
