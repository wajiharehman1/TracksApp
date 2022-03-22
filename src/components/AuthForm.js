import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Card, CardSection, Button, StatusBar} from '../common/';
import Styles from '../styles/Styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AuthForm = ({
  buttonText,
  onButtonPress,
  promptText,
  promptTouchable,
  onTouchablePress,
  onChangeEmailText,
  onChangePasswordText,
  errorText,
}) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#FFF'}}
      scrollEnabled={true}>
      <View style={styles.mainContainerLight}>
        <Image
          source={require('../assets/logo_blue_nobg.png')}
          style={styles.logoStyle}
        />
        <Text style={Styles.textStyleGrey}>{'Welcome to Todo App!'}</Text>
        <Text style={Styles.headerStyle}>{'Keeping you organized'}</Text>
        <Input
          label="Email"
          placeholder={'Enter email'}
          onChangeText={onChangeEmailText}
        />
        <Input
          label="Password"
          placeholder={'Enter password'}
          secureTextEntry
          onChangeText={onChangePasswordText}
        />
        <Text style={styles.errorTextStyle}>{errorText}</Text>
        <Button
          onPress={onButtonPress}
          backgroundColor={'#2E4670'}
          borderColor={'#2E4670'}
          textColor={'#FFF'}
          marginHorizontal={20}
          marginVertical={10}>
          {buttonText}
        </Button>
      </View>
      <View>
        <View style={styles.promptContainer}>
          <Text>{promptText}</Text>
          <TouchableOpacity style={{marginLeft: 5}} onPress={onTouchablePress}>
            <Text style={styles.promptText}>{promptTouchable}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  promptContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    color: 'gray',
    marginTop: 30,
  },
  promptText: {
    color: '#2E4670',
    fontWeight: 'bold',
  },
  buttonSpace: {
    marginVertical: 30,
  },
  logoStyle: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  mainContainerLight: {
    backgroundColor: '#FFF',
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default AuthForm;
