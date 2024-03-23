import { useNavigationService } from '@hooks/navigation';
import { ScreenType } from '@types';
import { useEffect } from 'react';
import { View } from 'react-native';

export type HomeScreenParams = {
  HomeScreen: undefined;
};

const HomeScreen = () => {
  const { navigate } = useNavigationService();

  useEffect(() => {
    navigate('MapListScreen');
  }, []);

  return <View style={{ flex: 1, backgroundColor: 'white' }} />;
};

export default {
  Screen: HomeScreen,
  name: 'HomeScreen',
} as ScreenType.ScreenType;
