import { RootStack } from 'src/navigation/RootStack';
import HistoryListScreen from './history.list.screen';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const HistoryGroup = () => {
  return (
    <RootStack.Group screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <RootStack.Screen
        component={HistoryListScreen.Screen}
        name={HistoryListScreen.name}
      />
    </RootStack.Group>
  );
};

export default HistoryGroup;
