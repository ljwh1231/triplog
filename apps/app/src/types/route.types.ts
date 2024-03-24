import { NavigationContainerRef } from '@react-navigation/native';
import { HomeGroupParams } from '@screens/home.group/home.group.type';
import { LoginGroupParams } from '@screens/login.group/login.group.type';
import { MapGroupParams } from '@screens/map.group/map.group.type';

type ScreenParamList = HomeGroupParams & MapGroupParams & LoginGroupParams;

export type AllRouteParamList = ScreenParamList;

export type AppNavigation = NavigationContainerRef<AllRouteParamList>;
