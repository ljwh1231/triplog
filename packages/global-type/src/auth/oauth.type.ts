import { KakaoOAuthToken, KakaoProfile } from '@react-native-seoul/kakao-login';

export type KakaoLoginResponse = KakaoOAuthToken;

export type KakaoProfileResponse = KakaoProfile;

export type AppleAuthDecodedResponse = {
  aud: string;
  auth_time: number;
  c_hash: string;
  email: string;
  email_verified: boolean;
  exp: number;
  iat: number;
  iss: string;
  nonce: boolean;
  nonce_supported: boolean;
  sub: string;
};

export type ResLogin = {
  token: string;
};

export type Profile = {
  id: number;
  email: string;
  name: string;
  token: string;
};
