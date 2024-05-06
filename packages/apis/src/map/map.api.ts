import { MapType } from '@repo/global-type';
import { API } from '../';

export const getMyMapList = () => API.get<{ maps: MapType.Map[] }>('/map');
