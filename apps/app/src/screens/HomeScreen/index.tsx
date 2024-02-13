import { ScreenType } from '@types';
import 'core-js/stable/atob';
import { View } from 'react-native';

export type HomeScreenParams = {
  HomeScreen: undefined;
};

const HomeScreen = () => {
  return <View style={{ flex: 1, backgroundColor: 'white' }} />;
};

export default {
  Screen: HomeScreen,
} as ScreenType.ScreenType;
