import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const InputWithoutLabel = ({placeholder}) => {
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginVertical: 20,
    paddingVertical: 10,
    color: '#676767',
    fontSize: 15,
    borderBottomColor: '#676767',
    borderBottomWidth: 1,
  },
});
export {InputWithoutLabel};
