import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash';

const SplashScreen = ({navigation}) => {
  const {containerStyle, logoStyle} = styles;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthNav');
    }, 3000);
  });

  return (
    <View style={containerStyle}>
      <StatusBar animated={true} backgroundColor="#2E4670" hidden={true} />
      <Image source={require('../assets/1024-no-bg.png')} style={logoStyle} />
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#2E4670',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 300,
    height: 300,
  },
};

export default SplashScreen;
