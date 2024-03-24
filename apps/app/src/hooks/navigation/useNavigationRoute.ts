import { RouteProp, useRoute } from '@react-navigation/native';
import { RouteType } from '@types';

const useNavigationRoute = <Name extends keyof RouteType.AllRouteParamList>(
  _: Name,
) => {
  return useRoute<RouteProp<RouteType.AllRouteParamList, Name>>();
};

export default useNavigationRoute;
