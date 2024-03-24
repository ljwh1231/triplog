import MapList from '@components/MapList';
import NavBar from '@components/NavBar';
import ScreenTemplate from '@components/ScreenTemplate';
import { ScreenType } from '@types';
import { StyleSheet, View } from 'react-native';

export type MapListScreenParams = {
  MapListScreen: undefined;
};

const MapListScreen = () => {
  return (
    <ScreenTemplate useBottomPadding NavBar={<NavBar title="adasdasda" />}>
      <MapList />
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default {
  Screen: MapListScreen,
  name: 'MapListScreen',
} as ScreenType.ScreenType;
