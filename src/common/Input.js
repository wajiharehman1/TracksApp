import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: 'gray',
    paddingRight: 5,
    paddingLeft: 20,
    fontSize: 16,
    lineHeight: 25,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#F0F0F0',
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 10,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 10,
  },
};
export {Input};
