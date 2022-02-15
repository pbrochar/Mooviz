import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FriendsScreen from "../screens/Friends";
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
					<HeaderTitle style={headerStyles.title}>Share with friends</HeaderTitle>
				</View>
			)}
		>	
		</Header>
	);
}

const FriendsStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
		  header: customHeader,
	  }}
  >
    <Stack.Screen
    screenOptions={{
      presentation: 'modal'
    }}
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