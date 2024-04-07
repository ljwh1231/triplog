import { RootStack } from 'src/navigation/RootStack';
import loginMainScreen from './login.main.screen';
import loginWebviewScreen from './login.webview.screen';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const LoginGroup = () => {
  return (
    <RootStack.Group screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <RootStack.Screen
        component={loginMainScreen.Screen}
        name={loginMainScreen.name}
      />
      <RootStack.Screen
        component={loginWebviewScreen.Screen}
        name={loginWebviewScreen.name}
      />
    </RootStack.Group>
  );
};

export default LoginGroup;
