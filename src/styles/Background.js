import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

const Background = ({children}) => {
  return <View styles={styles.MainContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'stretch',
    width: 500,
  },
});

export {Background};
