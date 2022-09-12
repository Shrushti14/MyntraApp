import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Settings = (props) => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{ color: "#006600", fontSize: 40 }}>Settings Screen!</Text>
	<Ionicons name="ios-settings-outline" size={80} color="#006600" />
	<TouchableOpacity
		title="Go to Home"
		color="#006600"
		onPress={() => props.navigation.navigate("Home")}>
		
	</TouchableOpacity>
	</View>
);
};

export default Settings;
