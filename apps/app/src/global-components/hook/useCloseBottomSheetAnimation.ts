import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { usePopupContext } from 'react-native-global-components';
import { runOnJS } from 'react-native-reanimated';

type UseCloseBottomSheetAnimationProps = {
  bottomSheetRef: React.RefObject<BottomSheetModalMethods>;
};

const useCloseBottomSheetAnimation = (
  props: UseCloseBottomSheetAnimationProps,
) => {
  const { bottomSheetRef } = props;

  const { addHideAnimation } = usePopupContext();

  addHideAnimation(() => {
    return new Promise<void>((resolve) => {
      bottomSheetRef.current?.close();

      setTimeout(() => {
        runOnJS(resolve)();
      }, 500);
    });
  });
};

export default useCloseBottomSheetAnimation;
