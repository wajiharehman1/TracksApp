import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Card, CardSection, Button} from '../common/';
import Styles from '../styles/TextStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AuthForm = ({
  buttonText,
  onButtonPress,
  promptText,
  promptTouchable,
  onTouchablePress,
}) => {
  return (
    <KeyboardAwareScrollView style={Styles.mainContainerLight}>
      <View
        styles={{
          flex: 1,
          borderWidth: 1,
          borderColor: 'red',
          width: '100%',
        }}>
        <Image
          source={require('../assets/logo_blue_nobg.png')}
          style={Styles.logoStyle}
        />
        <Text style={Styles.textStyleGrey}>{'Welcome to Todo App!'}</Text>
        <Text style={Styles.headerStyle}>{'Keeping you organized'}</Text>
        <Input label="Email" placeholder={'Enter email'} />
        <Input
          label="Password"
          placeholder={'Enter password'}
          secureTextEntry
        />
        <Button>{buttonText}</Button>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
    paddingVertical: 10,
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
});

export default AuthForm;
