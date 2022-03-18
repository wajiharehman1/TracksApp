import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CategoryCard = () => {
  return (
    <TouchableOpacity style={[styles.cardStyle]}>
      <View>
        <Image />
        <Text>
          <FontAwesome5 name="briefcase" size={20} />
        </Text>
      </View>
      <View>
        <View style={styles.innerRow}>
          <Text style={styles.categoryText}>Category</Text>
          <Text>Count</Text>
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
  },
  categoryText: {
    fontWeight: 'bold',
  },
});

export default CategoryCard;
