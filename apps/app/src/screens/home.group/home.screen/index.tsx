import MapList from '@components/MapList';
import ScreenTemplate from '@components/ScreenTemplate';
import { useNavigationService } from '@hooks/navigation';
import { ScreenType } from '@types';
import HomeNavBar from './components/HomeNavBar';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';

export type HomeScreenParams = {
  HomeScreen: undefined;
};

const HomeScreen = () => {
  const { navigate } = useNavigationService();

  const handlePressItem = (name: string) => {
    return navigate('MapDetailScreen', {
      name,
    });
  };

  useEffect(() => {
    navigate('LoginMainScreen');
  }, []);

  return (
    <ScreenTemplate useTopPadding useBottomPadding NavBar={<HomeNavBar />}>
      <View style={styles.mapListContainer}>
        <MapList onPressItem={handlePressItem} />
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  mapListContainer: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default {
  Screen: HomeScreen,
  name: 'HomeScreen',
} as ScreenType.ScreenType;
