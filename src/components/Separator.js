import React from 'react';
import {View, Text} from 'react-native';

const Separator = () => {
  return (
    <View
      elevation={1}
      style={{
        height: 1,
        width: '97%',
        margin: 5,
        backgroundColor: '#F0F0F0',
        border: 2.9,
        borderColor: 'black',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 16,
        },
        shadowOpacity: 1,
        shadowRadius: 7.49,
      }}></View>
  );
};

export default Separator;
