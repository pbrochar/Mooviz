import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/Search";
import headerStyles from "./headerStyle";
import Icon from 'react-native-vector-icons/Feather';
import {Header, HeaderTitle} from "@react-navigation/elements"
import {View} from 'react-native';


const customHeader = () => {
	return (
		<Header
			headerStyle={headerStyles.backgroundBlack}
			headerLeft= {() => (
				<View style={headerStyles.name}>
					<Icon name="search" color="grey" size={24} />
					<HeaderTitle style={headerStyles.title}>Find a piece</HeaderTitle>
				</View>
			)}
		>	
		</Header>
	);
}

const Stack = createStackNavigator();

const SearchStackNavigator = () => (
	<Stack.Navigator 
	screenOptions={{
		header: customHeader,
	}}>
	  <Stack.Screen
		name="SearchStack"
		component={SearchScreen}
		options={{ 
			headerShown: true,
			headerStyle: {
				backgroundColor: 'black',
			},
			headerTitleStyle: {
				color: 'red'
			},
			title: "Search" 
		}}
	  />
	</Stack.Navigator>
);

export default SearchStackNavigator;