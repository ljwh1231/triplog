import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { CommonPopupItem } from './CommonPopup.type';

export const CommonPopupTextStyle: Record<
  CommonPopupItem['type'],
  StyleProp<TextStyle>
> = {
  delete: {
    color: '#B00000',
  },
  cancel: {
    color: '#9E9E9E',
  },
};
