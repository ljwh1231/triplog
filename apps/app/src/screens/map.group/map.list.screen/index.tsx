import MapList from '@components/MapList';
import { ScreenType } from '@types';
import { StyleSheet, View } from 'react-native';

export type MapListScreenParams = {
  MapListScreen: undefined;
};

const MapListScreen = () => {
  return (
    <View style={styles.container}>
      <MapList />
    </View>
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
