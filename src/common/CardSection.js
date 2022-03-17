import React from 'react';
import {View} from 'react-native';

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 12,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative',
    flexDirection: 'row',
  },
};

export {CardSection};
