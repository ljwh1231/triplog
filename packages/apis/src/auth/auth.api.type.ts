export type AuthType = 'apple' | 'kakao';

export type SignUpParams = {
  authType: AuthType;
  authId: string;
  name: string;
  email: string;
};

export type GetProfileResponse = {
  authId: string;
  name: string;
  email: string;
};
