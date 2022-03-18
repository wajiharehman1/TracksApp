import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import AnimatedSplash from 'react-native-animated-splash';
const Stack = createStackNavigator();

const NavigationWrapper = () => {
  AnimatedSplash.hide();

  return (
    <Stack.Navigator
      initialRouteName="AuthNav"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainNav" component={MainNavigator} />
      <Stack.Screen name="AuthNav" component={AuthNavigator} />
    </Stack.Navigator>
  );
};

function RootNavigator() {
  console.log('Root Nav');
  return (
    <NavigationContainer>
      <NavigationWrapper />
    </NavigationContainer>
  );
}

export default RootNavigator;
