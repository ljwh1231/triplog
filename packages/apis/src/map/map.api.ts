import { MapType } from '@repo/global-type';
import { API } from '../';

export const getMyMapList = () => API.get<{ maps: MapType.Map[] }>('/map');

export const createMap = (params: { name: string }) => API.post('/map', params);
