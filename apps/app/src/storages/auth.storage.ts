import { tripLogStorage } from '@storages';

export const setAccessTokenStorage = (accessToken: string) =>
  tripLogStorage.set('accessToken', accessToken);

export const getAccessTokenStorage = () =>
  tripLogStorage.getString('accessToken');
