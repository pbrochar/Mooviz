import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Text, View} from 'react-native';

import {Header, HeaderTitle} from "@react-navigation/elements"
import HomeScreen from "../screens/Home";
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';
import headerStyles from "./headerStyle";
const Drawer = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width

const customHeader = ({ navigation, route, options }) => {
	return (
		<Header
			headerStyle={headerStyles.backgroundBlack}
			headerLeft= {() => (
			<View style={headerStyles.name}>
				<Icon name="home" color="grey" size={24}/>
				<HeaderTitle style={headerStyles.title}>Feed</HeaderTitle>
			</View>	)}
			headerRight={() => (
				<TouchableOpacity style={{ padding: 10, }}
					onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
					<Icon name="menu" size={35} color="#e20000" />
				</TouchableOpacity>
			)}
		>	
		</Header>
		
	);
}

const CustomDrawer = ({props, navigation}) => {
	return (
	  <View
		style={{
		  justifyContent: 'center',
		  alignItems: 'center',
		  flex: 1,
		}}>
		<Text style={{color:"red"}}>This is a custom drawer</Text>
	  </View>
	);
  };


const HomeDrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
		screenOptions={{
			header: customHeader,
			swipeEnabled: false,
			drawerType: 'front',
			drawerStyle: {
				backgroundColor: 'black',
				width: windowWidth * 0.8,
			},
		}}
		
	  drawerContent={({navigation}) => {
		return <CustomDrawer navigation={navigation} />;
	  }}
	>
      <Drawer.Screen  name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default HomeDrawerNavigator;