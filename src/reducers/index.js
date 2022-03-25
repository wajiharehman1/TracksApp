import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';
import AuthReducer from './AuthReducer';
import TaskReducer from './TaskReducer';

export default combineReducers({
  auth: AuthReducer,
  category: CategoryReducer,
  tasks: TaskReducer,
});
