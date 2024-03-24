import { NavigationContainerRef } from '@react-navigation/native';
import { BootSplashGroupParams } from '@screens/bootsplash.group/bootsplash.group.type';
import { HomeGroupParams } from '@screens/home.group/home.group.type';
import { LoginGroupParams } from '@screens/login.group/login.group.type';
import { MapGroupParams } from '@screens/map.group/map.group.type';

type ScreenParamList = HomeGroupParams &
  MapGroupParams &
  LoginGroupParams &
  BootSplashGroupParams;

export type AllRouteParamList = ScreenParamList;

export type AppNavigation = NavigationContainerRef<AllRouteParamList>;
