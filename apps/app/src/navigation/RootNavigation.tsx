import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Screens from '@screens';
import { jsUtils } from '@repo/utils';
import MapGroup from 'src/screens/map.group';

export const RootStack = createNativeStackNavigator();

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootNavigation = () => {
  const allNavigation = jsUtils.typedObjectKeys(Screens).map((key) => ({
    key,
    ...Screens[key],
  }));

  return (
    <RootStack.Navigator>
      {allNavigation.map((navigation) => {
        const { Screen, options, key } = navigation;

        return (
          <RootStack.Screen
            key={key}
            name={key}
            component={Screen}
            options={{
              ...DEFAULT_SCREEN_OPTIONS,
              ...options,
            }}
          />
        );
      })}
      {MapGroup()}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
