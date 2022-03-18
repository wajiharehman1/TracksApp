import React from 'react';
import {StatusBar, View} from 'react-native';
import RootNavigator from './src/RootNavigator';
import AnimatedSplash from 'react-native-animated-splash';

const App = () => {
  AnimatedSplash.hide();
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <RootNavigator />
    </View>
  );
};

export default App;
