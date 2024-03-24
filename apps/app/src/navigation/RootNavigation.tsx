import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeGroup from '../screens/home.group';
import MapGroup from '../screens/map.group';
import { RootStack } from './RootStack';
import LoginGroup from '@screens/login.group';

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      {HomeGroup()}
      {LoginGroup()}
      {MapGroup()}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
