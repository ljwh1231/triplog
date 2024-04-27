import Button from '@components/Button';
import MapList from '@components/MapList';
import ScreenTemplate from '@components/ScreenTemplate';
import { useNavigationService } from '@hooks/navigation';
import { ScreenType } from '@types';
import { StyleSheet, View } from 'react-native';
import HomeNavBar from './components/HomeNavBar';
import SvgIcon from '@components/SvgIcon';

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

  return (
    <ScreenTemplate useTopPadding useBottomPadding NavBar={<HomeNavBar />}>
      <View style={styles.mapListContainer}>
        <MapList onPressItem={handlePressItem} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.historyButton}>
          <SvgIcon iconName="book" size={30} />
        </View>
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
  historyButton: {
    width: 60,
    height: 60,
    position: 'absolute',
    borderRadius: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 80,
  },
});

export default {
  Screen: HomeScreen,
  name: 'HomeScreen',
} as ScreenType.ScreenType;
