import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/Settings";

const Stack = createStackNavigator();

const SettingsStackNavigator = () => (
	<Stack.Navigator>
	  <Stack.Screen
		name="SettingsScreen"
		component={SettingsScreen}
		options={{ 
			headerShown: true,
			headerStyle: {
				backgroundColor: 'black',
			},
			headerTitleStyle: {
				color: 'red'
			},
			title: "Settings" }}
	  />
	</Stack.Navigator>
);
export default SettingsStackNavigator;