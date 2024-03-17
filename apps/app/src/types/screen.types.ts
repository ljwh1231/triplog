import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type ScreenType = {
  Screen: React.FunctionComponent;
  options?: NativeStackNavigationOptions;
};
