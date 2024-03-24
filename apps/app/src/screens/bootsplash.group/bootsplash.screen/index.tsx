import { ScreenType } from '@types';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import LottieView from 'lottie-react-native';

const BootSplashLottie = require('./asset/splash.json');

export type BootSplashScreenParams = {
  BootSplashScreen: undefined;
};

const BootSplashScreen = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: false });
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={BootSplashLottie}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0275FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 98,
    height: 113,
  },
});

export default {
  Screen: BootSplashScreen,
  name: 'BootSplashScreen',
} as ScreenType.ScreenType;
