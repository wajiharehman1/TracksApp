import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Styles from '../styles/Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {InputWithoutLabel} from '../common/InputWithoutLabel';
import {Button} from '../common';
const CreateCategoryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View>
        <TouchableOpacity
          style={stylesLocal.backArrowBtn}
          onPress={() => navigation.pop()}>
          <FontAwesome5 name="arrow-left" color={'#FFF'} size={30} />
        </TouchableOpacity>
        <Text style={stylesLocal.headerText}>New Category</Text>
      </View>
      <View style={Styles.containerBody}>
        <View style={stylesLocal.rowContainer}>
          <FontAwesome5 name={'circle'} size={20} color={'#676767'} />
          <Text style={stylesLocal.categoryText}>Category Name</Text>
        </View>
        <InputWithoutLabel placeholder={'Category title'} />
        <Button
          backgroundColor={'#1AB7A7'}
          borderColor={'#1AB7A7'}
          textColor={'#FFF'}>
          Add Category
        </Button>
      </View>
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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 15,
  },
});

export default CreateCategoryScreen;
