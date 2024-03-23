import { RootStack } from 'src/navigation/RootStack';
import HomeScreen from './home.screen';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const HomeGroup = () => {
  return (
    <RootStack.Group screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <RootStack.Screen component={HomeScreen.Screen} name={HomeScreen.name} />
    </RootStack.Group>
  );
};

export default HomeGroup;
