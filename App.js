import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./Screens/HomeScreen";
//import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./Screens/SettingsScreen";

const AppNavigator = createStackNavigator(
{
	Home: HomeScreen,
//	Profile: ProfileScreen,
	Settings: SettingsScreen,
},
{
	defaultNavigationOptions: {
	headerStyle: {
		backgroundColor: "white",
	},
	headerTintColor: "black",
  headerTitleAlign: "center"
	},
}
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
return (
	<Navigator>
	<HomeScreen />
	</Navigator>
);
}
