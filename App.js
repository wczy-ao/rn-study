import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons,AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Test1 from './screens/Test';
import Test2 from './screens/Test2';
import Test3 from './screens/Test3';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Tab.Screen
            name="首页"
            component={Test1}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen name="推荐" component={Test2} />
          <Tab.Screen
            name="个人"
            component={Test3}
            options={{
              title: 'About the Meal',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}


const styles = StyleSheet.create({});
