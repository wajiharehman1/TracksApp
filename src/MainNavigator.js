import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateCategoryScreen from './screens/CreateCategoryScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';
import ViewTasksScreen from './screens/ViewTasksScreen';

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
      <MainStack.Screen name="ViewTasks" component={ViewTasksScreen} />
      <MainStack.Screen name="CreateTask" component={CreateTaskScreen} />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
