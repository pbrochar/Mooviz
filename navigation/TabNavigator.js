import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';

import SearchStackNavigator from "./SearchStackNavigator";
import SettingsStackNavigator from "./SettingsStackNavigator";
import HomeDrawerNavigator from "./HomeDrawerNavigator";
import PlaylistStackNavigator from "./PlaylistStackNavigator";
import FriendsStackNavigator from "./FriendsStackNavigator";


const Tab = createBottomTabNavigator();


const routeIcon = (name, focused) => {
  const littleSize = 25;
  const bigSize = 40;
  const focusedColor = '#e20000';
  const unfusedColor = 'grey'

  switch (name) {
    case "Playlist":
      return (
        <MaterialCommunityIcons 
          name="filmstrip"
          color={focused ? focusedColor: unfusedColor}
          size={focused ? bigSize:littleSize}
        />
      );
    case "Home" :
      return (
        <Icon 
          name="home"
          color={focused ? focusedColor: unfusedColor}
          size={focused ? bigSize:littleSize}
        />
      );
    case "Friends":
      return (
        <Icon 
          name="users"
          color={focused ? focusedColor: unfusedColor}
          size={focused ? bigSize:littleSize} 
        />
      );
    case "Settings":
      return (
        <Icon
          name="settings"
          color={focused ? focusedColor: unfusedColor}
          size={focused ? bigSize:littleSize}  
        />
      );
    case "Search":
      return (
        <Icon 
          name="search"
          color={focused ? focusedColor: unfusedColor}
          size={focused ? bigSize:littleSize} 
        />
      )
  }
}


function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={ styles.bottomNavBar }>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            //TO DO get the drawer state for close if change tab,
            // navigation.dispatch(DrawerActions.closeDrawer())
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
            
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress} 
            style={styles.centeredItems} key={index}>
            <View
              style={[styles.centeredItems, styles.itemsNavBar,]}>
              <View style={{ marginRight: isFocused ? 10: 0,}}>
                {routeIcon(label, isFocused)}
              </View>
              <Text 
                style={styles.buttonText}>
                {isFocused ? label: ''}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const BottomTabNavigator = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        initialRouteName="Search" // change to home
        screenOptions={{
          headerShown:false,
          tabBarHideOnKeyboard: true			}}
      >
      <Tab.Screen name="Home" component={HomeDrawerNavigator} />
      <Tab.Screen name="Playlist" component={PlaylistStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Friends" component={FriendsStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  centeredItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavBar : {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent:'space-between',
    backgroundColor: 'black',
    height: 70,
    padding: 10,
    borderTopWidth: 0.2,
    borderTopColor: '#525252',
  },
  itemsNavBar : {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#e20000',
    fontSize: 15,
    fontWeight: 'bold',
  }
})

export default BottomTabNavigator;