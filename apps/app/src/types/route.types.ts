import { NavigationContainerRef } from '@react-navigation/native';
import { HomeGroupParams } from '@screens/home.group/home.group.type';
import { MapGroupParams } from '@screens/map.group/map.group.type';

type ScreenParamList = HomeGroupParams & MapGroupParams;

export type AllRouteParamList = ScreenParamList;

export type AppNavigation = NavigationContainerRef<AllRouteParamList>;
