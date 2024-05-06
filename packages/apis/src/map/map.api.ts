import { MapType } from '@repo/global-type';
import { API } from '../';

export const getMyMapList = () => API.get<{ maps: MapType.Map[] }>('/map');

export const createMap = (params: { name: string }) => API.post('/map', params);

export const modifyMap = (params: {
  id: number;
  data: Extract<MapType.Map, 'name'>;
}) => API.patch(`/map/${params.id}`, params.data);

export const deleteMap = (id: number) => API.delete(`/map/${id}`);
