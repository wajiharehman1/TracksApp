import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from '../common';
import {Oval} from '../common';
import styles from '../styles/Styles';
import CategoryCard from '../components/CategoryCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const HomeScreen = ({navigation}) => {
  let count = 2;
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
            navigation.navigate('CreateCategory');
          }}>
          Create Category
        </Button>
      </View>
      <KeyboardAwareScrollView>
        <View style={stylesLocal.bottomContainer}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
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

export default HomeScreen;
