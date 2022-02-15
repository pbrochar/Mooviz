import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PlaylistScreen from "../screens/Playlist";
import {Header, HeaderTitle} from "@react-navigation/elements"
import {View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import headerStyles from "./headerStyle";
const Stack = createStackNavigator();

const customHeader = () => {
	return (
		<Header
			headerStyle={headerStyles.backgroundBlack}
			headerLeft= {() => (
				<View style={headerStyles.name}>
					<MaterialCommunityIcons name="filmstrip" color="grey" size={24} />
					<HeaderTitle style={headerStyles.title}>Explore</HeaderTitle>
				</View>
			)}
		>	
		</Header>
	);
}

const PlaylistStackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			header: customHeader,
		}}>
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