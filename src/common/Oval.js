import React from 'react';
import {View, StyleSheet} from 'react-native';

const Oval = () => {
  return (
    <View>
      <View style={[styles.greenOval, styles.greenOvalPosition]} />
      <View style={[styles.navyOval, styles.navyOvalPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  greenOval: {
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: '#1AB7A7',
    position: 'absolute',
  },
  navyOval: {
    width: 450,
    height: 450,
    borderRadius: 450,
    backgroundColor: '#2E4670',
    position: 'absolute',
  },
  greenOvalPosition: {
    right: -150,
    top: -5,
  },
  navyOvalPosition: {
    left: -80,
    top: -100,
  },
});

export {Oval};
