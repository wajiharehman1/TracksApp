import {
  ADD_TASKS,
  TASK_TITLE_CHANGE,
  TASK_DATE_CHANGE,
  TASK_TIME_CHANGE,
} from '../actions/types';

export const addTasks = ({
  task_title,
  task_time,
  task_date,
  status,
  categoryID,
}) => {
  const {currentUser} = auth();
  console.log(currentUser.uid + '\t' + category_title + '\t' + category_color);

  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/categories/tasks`)
      .push({task_title, task_time, task_date, status, categoryID})
      .then(() => {
        dispatch({
          type: ADD_CATEGORY,
          payload: {category_title, category_color},
        });
        RootNavigation.navigate('Home');
      })
      .catch(error => console.log(error));
  };
};

export const titleChanged = task_title => {
  console.log('Task Actions', task_title);
  return {
    type: TASK_TITLE_CHANGE,
    payload: task_title,
  };
};

export const dateChanged = task_date => {
  console.log('Task Actions', task_date);

  return {
    type: TASK_DATE_CHANGE,
    payload: task_date,
  };
};

export const timeChanged = ({task_time}) => {
  console.log('Task Actions', task_time);
  return {
    type: TASK_TIME_CHANGE,
    payload: task_time,
  };
};
