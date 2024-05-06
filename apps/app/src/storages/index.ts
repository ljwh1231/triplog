import { MMKV } from 'react-native-mmkv';
import * as authStorage from './auth.storage';
import * as mapStorage from './map.storage';

const tripLogStorage = new MMKV({
  id: `tripLog-storage`,
  encryptionKey: 'hunter2',
});

export { tripLogStorage, authStorage, mapStorage };
