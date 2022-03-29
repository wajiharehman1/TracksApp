import React from 'react';
import AuthForm from '../components/AuthForm';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions/AuthActions';

const LoginScreen = props => {
  return (
    <AuthForm
      buttonText={'Login'}
      promptText={"Don't have an account?"}
      promptTouchable={'Register!'}
      onButtonPress={() => onLogin(props)}
      onTouchablePress={() => props.navigation.navigate('Signup')}
      onChangeEmailText={text => onEmailChange(props, text)}
      onChangePasswordText={text => onPasswordChange(props, text)}
      errorText={props.error}
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

const onLogin = props => {
  const {email, password} = props;
  console.log('Login button pressed');
  props.loginUser({email, password});
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginScreen);
