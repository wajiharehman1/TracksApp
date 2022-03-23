import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppWrapper from '../components/AppWrapper';
import {Button, InputWithoutLabel} from '../common';
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {managePanProps} from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';

const ViewTasksScreen = ({navigation, route}) => {
  // const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);
  const categoryTitle = route.params.categoryTitle;
  return (
    <AppWrapper headerText={categoryTitle + ' Tasks'}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </AppWrapper>
  );
};

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: '#3455'}}>
    <Button
      backgroundColor={'#1AB7A7'}
      textColor={'white'}
      borderColor={'#1AB7A7'}
      onPress={() => navigation.navigate('CreateTask')}>
      Add Task
    </Button>
  </View>
);

const SecondRoute = () => <View style={{flex: 1, backgroundColor: '#123'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const _renderTabBar = props => (
  <View>
    {/* <TabBar
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: 'pink'}}
    /> */}
  </View>
);

export default ViewTasksScreen;
