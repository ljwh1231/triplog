import { NavigationContainerRef } from '@react-navigation/native';
import { HomeScreenParams } from 'src/screens/HomeScreen';
import { MapTestScreenParams } from 'src/screens/MapTestScreen';

type ScreenParamList = HomeScreenParams & MapTestScreenParams;

export type AllRouteParamList = ScreenParamList;

export type AppNavigation = NavigationContainerRef<AllRouteParamList>;
