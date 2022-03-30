import {
  ADD_TASK,
  TASK_DATE_CHANGE,
  TASK_TITLE_CHANGE,
  TASK_TIME_CHANGE,
  TASKS_FETCH_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {tasks: ['Check']};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      // return state;
      return {...state, tasks: [...state.tasks, action.payload]};
    case TASK_TITLE_CHANGE:
      return {...state, task_title: action.payload};
    case TASK_DATE_CHANGE:
      return {...state, task_date: action.payload};
    case TASK_TIME_CHANGE:
      return {...state, task_time: action.payload};
    case TASKS_FETCH_SUCCESS:
      console.log('Checking action payload state', state);
      return {...state, tasks: action.payload};
    // return {...state, [uid]: action.payload};
    default:
      return state;
  }
};
