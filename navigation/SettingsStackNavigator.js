import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/Settings";
import headerStyles from "./headerStyle";
import Icon from 'react-native-vector-icons/Feather';
import {Header, HeaderTitle} from "@react-navigation/elements"
import {View} from 'react-native';

const Stack = createStackNavigator();

const customHeader = () => {
	return (
		<Header
			headerStyle={headerStyles.backgroundBlack}
			headerLeft= {() => (
				<View style={headerStyles.name}>
					<Icon name="users" color="grey" size={24} />
					<HeaderTitle style={headerStyles.title}>App parameters</HeaderTitle>
				</View>
			)}
		>	
		</Header>
	);
}


const SettingsStackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			header: customHeader,
	}}
	>
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