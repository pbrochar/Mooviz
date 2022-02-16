import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './navigation/TabNavigator';
import {StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';

const App = () => {
  NavigationBar.setBackgroundColorAsync("black");
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#000" barStyle="light-content"/>
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;