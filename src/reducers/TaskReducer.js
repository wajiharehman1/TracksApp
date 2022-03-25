import {
  ADD_TASKS,
  TASK_DATE_CHANGE,
  TASK_TITLE_CHANGE,
  TASK_TIME_CHANGE,
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASKS:
      return state;
    case TASK_TITLE_CHANGE:
      return {...state, task_title: action.payload};
    case TASK_DATE_CHANGE:
      return {...state, task_date: action.payload};
    case TASK_TIME_CHANGE:
      return {...state, task_time: action.payload};
    default:
      return state;
  }
};
