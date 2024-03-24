import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteType } from '@types';

const useNavigationService = () => {
  return useNavigation<
    NativeStackNavigationProp<RouteType.AllRouteParamList>
  >();
};

export default useNavigationService;
