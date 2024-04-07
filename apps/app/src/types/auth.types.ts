export type AppleAuthResponse = {
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
