import { RootStack } from 'src/navigation/RootStack';
import BootSplashScreen from './bootsplash.screen';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useInitializeApp } from '@hooks/core';

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const BootSplashGroup = () => {
  const { isInitialized } = useInitializeApp();

  return (
    <RootStack.Group screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <RootStack.Screen
        component={BootSplashScreen.Screen}
        name={BootSplashScreen.name}
      />
    </RootStack.Group>
  );
};

export default BootSplashGroup;
