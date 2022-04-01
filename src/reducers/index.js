import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';
import AuthReducer from './AuthReducer';
import TaskReducer from './TaskReducer';
import DayReducer from './DayReducer';

export default combineReducers({
  auth: AuthReducer,
  category: CategoryReducer,
  tasks: TaskReducer,
  selectedWeekDay: DayReducer,
});
