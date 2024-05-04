import { tripLogStorage } from './';

export const setAccessTokenStorage = (accessToken: string) =>
  tripLogStorage.set('accessToken', accessToken);

export const getAccessTokenStorage = () =>
  tripLogStorage.getString('accessToken');
