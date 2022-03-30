import {
  ADD_TASK,
  TASK_TITLE_CHANGE,
  TASK_DATE_CHANGE,
  TASK_TIME_CHANGE,
  TASKS_FETCH_SUCCESS,
} from './types';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import * as RootNavigation from '../NavigationService';

export const addTasks = ({
  task_title,
  task_datetime,
  category_id,
  category_title,
  category_color,
  status,
  index,
}) => {
  const {currentUser} = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/categories/${category_id}/tasks`)
      .push({task_title, task_datetime, status})
      .then(() => {
        dispatch({
          type: ADD_TASK,
          payload: {task_title, task_datetime, status},
        });
        RootNavigation.navigate('ViewTasks', {
          categoryID: category_id,
          categoryTitle: category_title,
          categoryColor: category_color,
          index,
        });
      })
      .catch(error => console.log(error));
  };
};

export const tasksFetch = category_id => {
  console.log('category_id', category_id);
  const {currentUser} = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/categories/${category_id}/tasks`)
      .on('value', snapshot => {
        dispatch({type: TASKS_FETCH_SUCCESS, payload: snapshot.val()});
        console.log('Snapshot Value', snapshot.val());
      });
  };
};

export const titleChanged = task_title => {
  return {
    type: TASK_TITLE_CHANGE,
    payload: task_title,
  };
};

export const dateChanged = task_date => {
  return {
    type: TASK_DATE_CHANGE,
    payload: task_date,
  };
};
