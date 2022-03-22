import {
  CATEGORY_UPDATE,
  ADD_CATEGORY,
  CATEGORY_TITLE_CHANGE,
  SELECT_CATEGORY_COLOR,
  CATEGORIES_FETCH_SUCCESS,
} from './types';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {useNavigation} from '@react-navigation/native';
import * as RootNavigation from '../NavigationService';

export const titleChanged = title => {
  return {
    type: CATEGORY_TITLE_CHANGE,
    payload: title,
  };
};

export const colorChanged = color => {
  console.log('Color change', color);
  return {
    type: SELECT_CATEGORY_COLOR,
    payload: color,
  };
};

export const addCategory = ({category_title, category_color}) => {
  const {currentUser} = auth();
  console.log(currentUser.uid + '\t' + category_title + '\t' + category_color);
  //   console.log({name, phone, shift});

  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/categories`)
      .push({category_title, category_color})
      .then(() => {
        console.log('Success');
        dispatch({type: ADD_CATEGORY});
        RootNavigation.navigate('Home');
      })
      .catch(error => console.log(error));
  };
};

export const categoriesFetch = () => {
  const {currentUser} = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/categories`)
      .on('value', snapshot => {
        dispatch({type: CATEGORIES_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};
