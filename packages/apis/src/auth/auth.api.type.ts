export type AuthType = 'apple' | 'kakao';

export type SignUpParams = {
  authType: AuthType;
  authId: string;
  name: string;
  email: string;
};

export type SignInResponse = {
  authId: string;
  name: string;
  email: string;
};
