/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenHome from './src/pages/ScreenHome';
import ScreenVerifEmail from './src/pages/ScreenVerifEmail';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ScreenHome} />
        <Tab.Screen name="Email" component={ScreenVerifEmail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
