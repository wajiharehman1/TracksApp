import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppWrapper from '../components/AppWrapper';
import {Button, InputWithoutLabel} from '../common';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import * as RootNavigation from '../NavigationService';
const ViewTasksScreen = ({route}) => {
  // const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'today',
      title: 'Today',
      route,
    },
    {key: 'weekly', title: 'Weekly'},
    {key: 'monthly', title: 'Monthly'},
  ]);
  const categoryTitle = route.params.categoryTitle;
  return (
    <AppWrapper headerText={categoryTitle + ' Tasks'}>
      <TabView
        lazy
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </AppWrapper>
  );
};

const todayTab = ({route}) => (
  <View style={{flex: 1, backgroundColor: '#fff'}}>
    <Button
      backgroundColor={'#1AB7A7'}
      textColor={'white'}
      borderColor={'#1AB7A7'}
      onPress={() => {
        RootNavigation.navigate('CreateTask', {
          categoryTitle: route.route.params.categoryTitle,
          categoryColor: route.route.params.categoryColor,
        });
      }}>
      Add Task
    </Button>
  </View>
);

const weeklyTab = () => (
  <View style={{flex: 1, backgroundColor: 'aliceblue'}} />
);

const monthlyTab = () => (
  <View style={{flex: 1, backgroundColor: 'powderblue'}} />
);

const renderScene = SceneMap({
  today: todayTab,
  weekly: weeklyTab,
  monthly: monthlyTab,
});

const _renderTabBar = props => (
  <View>
    <TabBar
      labelStyle={{
        color: 'gray',
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 1,
      }}
      indicatorStyle={{
        backgroundColor: '#1AB7A7',
        height: 6,
        width: 6,
        borderRadius: 500,
        marginHorizontal: 50,
        marginVertical: 2,
      }}
      style={{backgroundColor: 'white'}}
      {...props}
      contentContainerStyle={{
        justifyContent: 'center',
      }}
      activeColor={'#2E4670'}
      inactiveColor={'rgba(46,70,112,0.3)'}
      pressColor={'transparent'}
    />
  </View>
);

export default ViewTasksScreen;
