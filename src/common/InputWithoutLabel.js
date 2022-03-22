import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const InputWithoutLabel = ({placeholder, onChangeText}) => {
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginVertical: 20,
    paddingVertical: 10,
    color: '#676767',
    fontSize: 15,
    borderBottomColor: '#C1C1C1',
    borderBottomWidth: 1,
  },
});
export {InputWithoutLabel};
