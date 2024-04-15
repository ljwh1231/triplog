export type CommonPopupItem = {
  text: string;
  type: 'delete' | 'cancel';
  onPress: () => void;
};
