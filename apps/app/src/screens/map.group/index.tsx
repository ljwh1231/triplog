import { RootStack } from 'src/navigation/RootStack';
import MapDetailScreen from './map.detail.screen';
import MapListScreen from './map.list.screen';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import MapSearchScreen from './map.search.screen';
import MapMyListScreen from './map.my.list.screen';

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const MapGroup = () => {
  return (
    <RootStack.Group screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <RootStack.Screen
        component={MapListScreen.Screen}
        name={MapListScreen.name}
      />
      <RootStack.Screen
        component={MapDetailScreen.Screen}
        name={MapDetailScreen.name}
      />
      <RootStack.Screen
        component={MapSearchScreen.Screen}
        name={MapSearchScreen.name}
      />
      <RootStack.Screen
        component={MapMyListScreen.Screen}
        name={MapMyListScreen.name}
      />
    </RootStack.Group>
  );
};

export default MapGroup;
