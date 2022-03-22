import _ from 'lodash';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Oval} from '../common';
import styles from '../styles/Styles';
import {categoriesFetch} from '../actions';
import {connect} from 'react-redux';
import CategoryCard from '../components/CategoryCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const HomeScreen = props => {
  useEffect(() => {
    props.categoriesFetch();
    console.log(props.categories);
  }, []);
  return (
    <View style={({flex: 1}, styles.mainContainerLight)}>
      <View style={{marginBottom: 100}}>
        <Oval />
        <Text style={stylesLocal.greetingText}>Hello, [Name]!</Text>
        <Text style={stylesLocal.taskCountText}>
          You have [count] tasks scheduled for today
        </Text>
        <Button
          textColor={'#2E4670'}
          backgroundColor={'#FFF'}
          width={200}
          marginHorizontal={20}
          marginVertical={30}
          onPress={() => {
            props.navigation.navigate('CreateCategory');
          }}>
          Create Category
        </Button>
      </View>
      <KeyboardAwareScrollView>
        <View style={stylesLocal.bottomContainer}>
          <CategoryCard
            onPress={() =>
              props.navigation.navigate('ViewTasks', {
                categoryTitle: 'Category 1',
              })
            }
            title={'All'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  const categories = _.map(state.categories, (val, uid) => {
    return {...val, uid};
  });
  return {categories};
};

const stylesLocal = StyleSheet.create({
  greetingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 75,
    marginLeft: 25,
  },
  taskCountText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 25,
    marginTop: 20,
    marginBottom: 30,
  },
  bottomContainer: {
    flexWrap: 'wrap',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default connect(mapStateToProps, {categoriesFetch})(HomeScreen);
