import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppWrapper from '../components/AppWrapper';
import {Button, InputWithoutLabel} from '../common';
import {useNavigation} from '@react-navigation/native';

const ViewTasksScreen = ({navigation, route}) => {
  // const navigation = useNavigation();
  const categoryTitle = route.params.categoryTitle;
  return (
    <AppWrapper headerText={categoryTitle + ' Tasks'}>
      <Button
        backgroundColor={'#1AB7A7'}
        textColor={'white'}
        borderColor={'#1AB7A7'}
        onPress={() => navigation.navigate('CreateTask')}>
        Add Task
      </Button>
    </AppWrapper>
  );
};

export default ViewTasksScreen;
