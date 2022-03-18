import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateCategoryScreen from './screens/CreateCategoryScreen';
const MainStack = createStackNavigator();

function MainNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen
        name="CreateCategory"
        component={CreateCategoryScreen}
      />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
