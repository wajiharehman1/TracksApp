import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  RESET_FIELDS,
} from './types';
import auth from '@react-native-firebase/auth';
import * as RootNavigation from '../NavigationService';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  console.log('loginUser function', email + ' ' + password);
  return dispatch => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
        resetFields(dispatch);
      })
      .catch(error => {
        loginUserFail(dispatch);
        console.log('loginUserFail', error);
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  console.log('loginUserSuccess', user);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  RootNavigation.navigate('MainNav');
};

const resetFields = dispatch => {
  dispatch({
    type: RESET_FIELDS,
  });
};

export const registerUser = ({email, password}) => {
  return dispatch => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(console.log('Success'))
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL});
};
