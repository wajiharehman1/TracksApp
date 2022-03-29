import React, {useEffect} from 'react';
import {Text, View, useWindowDimensions, FlatList} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import {Button} from '../common';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {tasksFetch} from '../actions/TasksActions';
import * as RootNavigation from '../NavigationService';
import _ from 'lodash';
import {connect} from 'react-redux';
import TaskItem from '../components/TaskItem';
import Separator from '../components/Separator';
const ViewTasksScreen = props => {
  const route = props.route;
  const selectedCategory = props.categories[props.route.params.index];
  const tasksList = selectedCategory.tasks;
  console.log('Selected category', selectedCategory);
  console.log('Check tasks list', tasksList);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'today',
      title: 'Today',
      route,
      tasksList,
    },
    {key: 'weekly', title: 'Weekly'},
    {key: 'monthly', title: 'Monthly'},
  ]);
  const categoryTitle = route.params.categoryTitle;
  return (
    <AppWrapper
      headerText={
        categoryTitle != undefined ? categoryTitle + ' Tasks' : 'Uncategorized'
      }>
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

const todayTab = ({route}) => {
  let taskList = route.tasksList;
  const taskKeys = Object.keys(route.tasksList);
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
      <FlatList
        keyExtractor={item => item}
        data={taskKeys}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => {
          return (
            <View>
              <TaskItem
                taskTitle={taskList[item].task_title}
                taskDatetime={taskList[item].task_datetime}
                status={taskList[item].status}
              />
            </View>
          );
        }}
      />
      <Button
        backgroundColor={'#1AB7A7'}
        textColor={'white'}
        borderColor={'#1AB7A7'}
        onPress={() => {
          RootNavigation.navigate('CreateTask', {
            categoryID: route.route.params.categoryID,
            categoryTitle: route.route.params.categoryTitle,
            categoryColor: route.route.params.categoryColor,
          });
        }}>
        Add Task
      </Button>
    </View>
  );
};

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

const mapStateToProps = state => {
  const categories = _.map(state?.category, (val, uid) => {
    return {...val, uid};
  });
  return {categories};
};

export default connect(mapStateToProps, {tasksFetch})(ViewTasksScreen);
