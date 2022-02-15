import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './navigation/TabNavigator';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';





const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;