import React from 'react';
import {Text, Input, Button} from '../common';
import AuthForm from '../components/AuthForm';

const SignUpScreen = ({navigation}) => {
  return (
    <AuthForm
      buttonText={'Register'}
      promptText={'Already have an account?'}
      promptTouchable={'Sign in'}
      onTouchablePress={() => navigation.navigate('Login')}
    />
  );
};

export default SignUpScreen;
