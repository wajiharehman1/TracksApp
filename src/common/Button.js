import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({
  onPress,
  children,
  textColor,
  backgroundColor,
  width,
  height,
  marginHorizontal,
  marginVertical,
  borderColor,
}) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        buttonStyle,
        {backgroundColor, width, marginHorizontal, marginVertical, borderColor},
      ]}>
      <Text style={[textStyle, {color: textColor}]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#2E4670',
    borderRadius: 5,
    borderWidth: 1,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
};

export {Button};
