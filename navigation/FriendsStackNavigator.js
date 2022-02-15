import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FriendsScreen from "../screens/Friends";

const Stack = createStackNavigator();

const FriendsStackNavigator = () => (
	<Stack.Navigator>
	  <Stack.Screen
		name="FriendsStack"
		component={FriendsScreen}
		options={{
			headerShown: true,
			headerStyle: {
				backgroundColor: 'black',
			},
			headerTitleStyle: {
				color: 'red'
			},
			title: "Friends" 
		}}
	  />
	</Stack.Navigator>
);

export default FriendsStackNavigator;