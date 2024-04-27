import { createQueryKeyFactory } from '../react-query.util';

export type AuthQueryKeyList = {
  USER_INFO: undefined;
};

export default createQueryKeyFactory<AuthQueryKeyList>();
