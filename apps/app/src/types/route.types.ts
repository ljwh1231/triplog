import { NavigationContainerRef } from '@react-navigation/native';
import { HomeScreenParams } from 'src/screens/HomeScreen';

type ScreenParamList = HomeScreenParams;

export type AllRouteParamList = ScreenParamList;

export type AppNavigation = NavigationContainerRef<AllRouteParamList>;
