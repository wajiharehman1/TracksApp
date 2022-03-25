import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import NavigationService from '../NavigationService';

const CategoryCard = ({onPress, category}) => {
  // console.log('Category', category);
  const id = category.uid;
  return (
    <TouchableOpacity
      style={[
        styles.cardStyle,
        category.category_color
          ? {borderColor: category.category_color, borderWidth: 2}
          : {borderColor: 'none', borderWidth: 0},
      ]}
      onPress={onPress}>
      <View>
        <View style={styles.innerRow}>
          <Text style={styles.categoryText}>{category.category_title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 15,
    elevation: 8,
    width: 150,
    height: 125,
    backgroundColor: '#FFF',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  categoryText: {
    fontWeight: 'bold',
  },
});

export default CategoryCard;
