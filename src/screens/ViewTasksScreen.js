import React, {useEffect} from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  FlatList,
  StyleSheet,
} from 'react-native';
import AppWrapper from '../components/AppWrapper';
import {Button} from '../common';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {tasksFetch} from '../actions/TasksActions';
import * as RootNavigation from '../NavigationService';
import _ from 'lodash';
import {connect} from 'react-redux';
import TaskItem from '../components/TaskItem';
import WeekTaskItem from '../components/WeekTaskItem';
import MonthTaskItem from '../components/MonthTaskItem';
import Separator from '../components/Separator';

const ViewTasksScreen = props => {
  const route = props.route;
  const selectedCategory = props.categories[props.route.params.index];
  // console.log('Index in ViewTasksScreen', props.route.params.index);
  const tasksList = selectedCategory.tasks;
  // console.log('Selected category', selectedCategory);
  const taskKeys = Object.keys(tasksList);

  // const todayTasks = tasksList.map(task => console.log('Task Show', task));

  // console.log('Check tasks list object', tasksList[taskKeys[0]]);
  const todayDate = new Date(Date.now());
  const todaysTaskListKeys = taskKeys.filter(taskKey => {
    const taskDate = new Date(tasksList[taskKey].task_datetime)
      .toISOString()
      .substring(0, 10);
    return taskDate === todayDate.toISOString().substring(0, 10);
  });

  const todaysTaskList = todaysTaskListKeys.map(taskKey => {
    return {id: taskKey, task: tasksList[taskKey]};
  });

  const weekTaskListKeys = taskKeys.filter(taskKey => {
    const diff = getDifferenceInDays(tasksList[taskKey].task_datetime);
    return diff > 1 && diff <= 7;
  });

  const weeksTaskList = weekTaskListKeys.map(taskKey => {
    return {id: taskKey, task: tasksList[taskKey]};
  });

  const monthTaskListKeys = taskKeys.filter(taskKey => {
    const diff = getDifferenceInDays(tasksList[taskKey].task_datetime);
    return diff >= 7;
  });

  const monthTaskList = monthTaskListKeys.map(taskKey => {
    return {id: taskKey, task: tasksList[taskKey]};
  });

  console.log('monthsTaskList Show', monthTaskList);

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'today',
      title: 'Today',
      route,
      todaysTaskList,
      index: props.route.params.index,
    },
    {key: 'weekly', title: 'Weekly', weeksTaskList},
    {key: 'monthly', title: 'Monthly', monthTaskList},
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
  let taskList = route.todaysTaskList;
  let index = route.index;

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
      <FlatList
        keyExtractor={item => item.id}
        data={taskList}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => {
          return (
            <View>
              <TaskItem
                taskTitle={item.task.task_title}
                taskDatetime={item.task.task_datetime}
                status={item.task.status}
              />
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.emptyListText}>No tasks for today. Enjoy!</Text>
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
            index,
          });
        }}>
        Add Task
      </Button>
    </View>
  );
};

const weeklyTab = ({route}) => {
  let taskList = route.weeksTaskList;
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
      <FlatList
        keyExtractor={item => item.id}
        data={taskList}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.emptyListText}>
              No tasks for the week. Enjoy!
            </Text>
          );
        }}
        renderItem={({item}) => {
          return (
            <View>
              <WeekTaskItem
                taskTitle={item.task.task_title}
                taskDatetime={item.task.task_datetime}
                status={item.task.status}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const getDifferenceInDays = taskTime => {
  taskTime = new Date(taskTime).getTime();
  const todayTime = new Date(Date.now()).getTime();
  const diff = taskTime - todayTime;
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diffDays;
};

const monthlyTab = ({route}) => {
  let taskList = route.monthTaskList;
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
      <FlatList
        keyExtractor={item => item.id}
        data={taskList}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => {
          return (
            <View>
              <MonthTaskItem
                taskTitle={item.task.task_title}
                taskDatetime={item.task.task_datetime}
                status={item.task.status}
              />
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.emptyListText}>No tasks for you. Enjoy!</Text>
          );
        }}
      />
    </View>
  );
};

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

const styles = StyleSheet.create({
  emptyListText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 10,
    marginVertical: 20,
  },
});

export default connect(mapStateToProps, {tasksFetch})(ViewTasksScreen);
