import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Text, View} from 'react-native';

import HomeScreen from "../screens/Home";
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width

const CustomDrawer = ({props, navigation}) => {
	return (
	  <View
		style={{
		  justifyContent: 'center',
		  alignItems: 'center',
		  flex: 1,
		}}>
		<Text>This is a custom drawer</Text>
	  </View>
	);
  };


const HomeDrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
	  screenOptions={{
			headerStyle: {
				backgroundColor: 'black',
			},
			headerTitleStyle: {
				color: 'red'
			},
			swipeEnabled: false,
			drawerType: 'back',
			drawerStyle: {
				backgroundColor: 'black',
				width: windowWidth * 0.8,
			},
			headerLeft: () => (
				<TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
					<Icon name="menu" size={30} color="red" />
				</TouchableOpacity>
			),
		}}
	  drawerContent={({navigation}) => {
		return <CustomDrawer navigation={navigation} />;
	  }}
	>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default HomeDrawerNavigator;