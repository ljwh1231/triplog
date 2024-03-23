import { NavigationContainerRef } from '@react-navigation/native';
import { HomeScreenParams } from 'src/screens/HomeScreen';
import { MapTestScreenParams } from 'src/screens/MapTestScreen';
import { MapDetailScreenParams } from 'src/screens/map.group/map.detail.screen/MapDetailScreen';

type ScreenParamList = HomeScreenParams &
  MapTestScreenParams &
  MapDetailScreenParams;

export type AllRouteParamList = ScreenParamList;

export type AppNavigation = NavigationContainerRef<AllRouteParamList>;
