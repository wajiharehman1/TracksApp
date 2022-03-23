import React from 'react';
import {StatusBar, View} from 'react-native';
import RootNavigator from './src/RootNavigator';
import AnimatedSplash from 'react-native-animated-splash';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  AnimatedSplash.hide();
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="transparent" translucent />
        <RootNavigator />
      </View>
    </Provider>
  );
};

export default App;
