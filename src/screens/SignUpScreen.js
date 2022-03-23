import React from 'react';
import AuthForm from '../components/AuthForm';
import {connect} from 'react-redux';
import {
  registerUser,
  emailChanged,
  passwordChanged,
} from '../actions/AuthActions';

const SignUpScreen = props => {
  return (
    <AuthForm
      buttonText={'Register'}
      promptText={'Already have an account?'}
      promptTouchable={'Sign in'}
      onTouchablePress={() => props.navigation.navigate('Login')}
      onButtonPress={() => onRegister(props)}
      onChangeEmailText={text => onEmailChange(props, text)}
      onChangePasswordText={text => onPasswordChange(props, text)}
    />
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
  };
};

const onEmailChange = (props, text) => {
  props.emailChanged(text);
};

const onPasswordChange = (props, text) => {
  props.passwordChanged(text);
};

const onRegister = props => {
  const {email, password} = props;
  props.registerUser({email, password});
};

export default connect(mapStateToProps, {
  registerUser,
  emailChanged,
  passwordChanged,
})(SignUpScreen);
