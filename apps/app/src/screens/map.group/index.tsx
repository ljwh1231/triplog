import { RootStack } from 'src/navigation/RootNavigation';
import MapDetailScreen from './map.detail.screen/MapDetailScreen';

const MapGroup = () => {
  return (
    <RootStack.Group>
      <RootStack.Screen
        component={MapDetailScreen.Screen}
        name={MapDetailScreen.name}
      />
    </RootStack.Group>
  );
};

export default MapGroup;
