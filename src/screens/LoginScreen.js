import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginScreen = ({navigation}) => {
  console.log('Login Screen');
  return (
    <AuthForm
      buttonText={'Login'}
      promptText={"Don't have an account?"}
      promptTouchable={'Register!'}
      onButtonPress={() => navigation.navigate('MainNav')}
      onTouchablePress={() => navigation.navigate('Signup')}
    />
  );
};

export default LoginScreen;
