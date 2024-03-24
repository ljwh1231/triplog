import { RootStack } from 'src/navigation/RootStack';
import MapDetailScreen from './map.detail.screen/MapDetailScreen';
import mapListScreen from './map.list.screen';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const MapGroup = () => {
  return (
    <RootStack.Group screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <RootStack.Screen
        component={mapListScreen.Screen}
        name={mapListScreen.name}
      />
      <RootStack.Screen
        component={MapDetailScreen.Screen}
        name={MapDetailScreen.name}
      />
    </RootStack.Group>
  );
};

export default MapGroup;
