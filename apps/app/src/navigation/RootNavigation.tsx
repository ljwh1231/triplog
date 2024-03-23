import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeGroup from '../screens/home.group';
import MapGroup from '../screens/map.group';
import { RootStack } from './RootStack';

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      {HomeGroup()}
      {MapGroup()}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
