import {
  SELECT_CATEGORY_COLOR,
  CATEGORY_TITLE_CHANGE,
  ADD_CATEGORY,
  CATEGORIES_FETCH_SUCCESS,
} from '../actions/types';
const INITIAL_STATE = {category_title: '', category_color: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY_COLOR:
      return {
        ...state,
        category_color: action.payload,
      };
    case CATEGORY_TITLE_CHANGE:
      return {...state, category_title: action.payload};
    case ADD_CATEGORY:
      return INITIAL_STATE;
    case CATEGORIES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};