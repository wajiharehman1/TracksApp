import {
  CATEGORY_UPDATE,
  SELECT_CATEGORY_COLOR,
  CATEGORY_TITLE_CHANGE,
  ADD_CATEGORY,
  CATEGORIES_FETCH_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  categories: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORY_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case SELECT_CATEGORY_COLOR:
      return {
        ...state,
        category_color: action.payload,
      };
    case CATEGORY_TITLE_CHANGE:
      return {...state, category_title: action.payload};
    case ADD_CATEGORY:
      console.log('state/categories', state);
      return state;
    // return {...state, categories: action.payload};
    case CATEGORIES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
