import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Styles from '../styles/Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, CustomModal, InputWithoutLabel} from '../common';
import {useNavigation} from '@react-navigation/native';

const AppWrapper = ({headerText, children}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View>
        <TouchableOpacity
          style={stylesLocal.backArrowBtn}
          onPress={() => navigation.pop()}>
          <FontAwesome5 name="arrow-left" color={'#FFF'} size={30} />
        </TouchableOpacity>
        <Text style={stylesLocal.headerText}>{headerText}</Text>
      </View>
      <View style={Styles.containerBody}>{children}</View>
    </SafeAreaView>
  );
};

const stylesLocal = StyleSheet.create({
  backArrowBtn: {
    marginHorizontal: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default AppWrapper;
