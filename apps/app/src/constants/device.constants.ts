import { Dimensions } from 'react-native';

export const WIDTH = Math.min(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);

export const HEIGHT = Math.max(
  Dimensions.get('screen').width,
  Dimensions.get('screen').height,
);
