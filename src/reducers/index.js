import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
  categories: CategoryReducer,
});
