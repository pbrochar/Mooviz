import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PlaylistScreen from "../screens/Playlist";


const Stack = createStackNavigator();

const PlaylistStackNavigator = () => (
	<Stack.Navigator>
	  <Stack.Screen
		name="PlaylistStack"
		component={PlaylistScreen}
		options={{ 
			headerShown: true,
			headerStyle: {
				backgroundColor: 'black',
			},
			headerTitleStyle: {
				color: 'red'
			},
			title: "Playlist" 
		}}
	  />
	</Stack.Navigator>
);

export default PlaylistStackNavigator;