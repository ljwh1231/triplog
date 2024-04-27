import { API } from '../';
import { SignInResponse, SignUpParams } from './auth.api.type';

export const signUp = (params: SignUpParams) =>
  API.post<{ token: string }>('/auth', params);

export const signIn = () => API.get<SignInResponse>('/auth');
