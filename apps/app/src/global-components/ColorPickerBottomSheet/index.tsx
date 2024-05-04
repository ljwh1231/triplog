import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useEffect, useRef } from 'react';
import {
  FullScreenLayout,
  FullScreenOverlay,
  createPopup,
  usePopupContext,
} from 'react-native-global-components';
import ColorPicker, { Panel5, PreviewText } from 'reanimated-color-picker';
import useCloseBottomSheetAnimation from '../hook/useCloseBottomSheetAnimation';

type ColorPickerBottomSheetProps = {
  onPress: (hex: string) => void;
};

const ColorPickerBottomSheet = (props: ColorPickerBottomSheetProps) => {
  const { onPress } = props;

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { hide } = usePopupContext();

  const closeBottomSheet = async () => {
    bottomSheetRef.current?.close();
    await hide();
  };

  useEffect(() => {
    bottomSheetRef.current?.present();
  }, []);

  const onSelectColor = ({ hex }: { hex: string }) => {
    // do something with the selected color.
    console.log(hex);
    onPress(hex);
  };

  useCloseBottomSheetAnimation({
    bottomSheetRef,
  });

  return (
    <BottomSheetModalProvider>
      <FullScreenLayout>
        <FullScreenOverlay onPress={closeBottomSheet} />
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['70%']}
          onDismiss={closeBottomSheet}>
          <ColorPicker
            style={{ width: '100%' }}
            value="red"
            onComplete={onSelectColor}>
            <PreviewText />
            <Panel5 />
          </ColorPicker>
        </BottomSheetModal>
      </FullScreenLayout>
    </BottomSheetModalProvider>
  );
};

export default createPopup(ColorPickerBottomSheet);
