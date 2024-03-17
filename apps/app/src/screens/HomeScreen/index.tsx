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
    navigate('MapTestScreen');
  }, []);

  return <View style={{ flex: 1, backgroundColor: 'white' }} />;
};

export default {
  Screen: HomeScreen,
} as ScreenType.ScreenType;
