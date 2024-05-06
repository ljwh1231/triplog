import { API } from '../';
import { GetProfileResponse, SignUpParams } from './auth.api.type';

export const signUp = (params: SignUpParams) =>
  API.post<{ token: string }>('/auth', params);

export const getProfile = () => API.get<GetProfileResponse>('/auth');
