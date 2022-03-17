import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const NavigationWrapper = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
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
