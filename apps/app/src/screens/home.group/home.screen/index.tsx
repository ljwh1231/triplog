import Button from '@components/Button';
import MapList from '@components/MapList';
import ScreenTemplate from '@components/ScreenTemplate';
import { useAsyncEffect } from '@hooks/common';
import { useNavigationService } from '@hooks/navigation';
import { commonApi } from '@repo/apis';
import { ScreenType } from '@types';
import { StyleSheet, View } from 'react-native';
import HomeNavBar from './components/HomeNavBar';

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

  const handlePressRecord = () => {
    return navigate('MapSearchScreen');
  };

  useAsyncEffect(async () => {
    const response = await commonApi.getCommonTest({ id: 1 });

    console.log(response);
  }, []);

  return (
    <ScreenTemplate useTopPadding useBottomPadding NavBar={<HomeNavBar />}>
      <View style={styles.mapListContainer}>
        <MapList onPressItem={handlePressItem} />
      </View>
      <View style={styles.buttonContainer}>
        <Button.Button onPress={handlePressRecord} text="여행 기록하기" />
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  mapListContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
});

export default {
  Screen: HomeScreen,
  name: 'HomeScreen',
} as ScreenType.ScreenType;
