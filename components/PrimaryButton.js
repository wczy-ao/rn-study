import { View, Text } from "react-native";

function PrimaryButton(props) {
  console.log(props);
  return (
    <View>
      <Text style={{...props.style}}>{props.children}</Text>
    </View>
  );
}

export default PrimaryButton;
