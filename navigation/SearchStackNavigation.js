import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/Search";


const Stack = createStackNavigator();

const SearchStackNavigator = () => (
	<Stack.Navigator>
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