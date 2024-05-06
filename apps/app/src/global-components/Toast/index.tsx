import Font from '@components/Font/Font';
import SvgIcon from '@components/SvgIcon';
import { SvgIconKey } from '@components/SvgIcon/svgicon.type';
import { DEVICE_CONSTANTS } from '@constants';
import { useEffect, useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import {
  createPopup,
  useFadeAnimationStyle,
  usePopupContext,
  useSlideAnimationStyle,
} from 'react-native-global-components';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ToastProps = {
  text: string;
  iconName?: SvgIconKey;
  onPress?: () => void;
};

const Toast = (props: ToastProps) => {
  const { text, iconName, onPress } = props;

  const timer = useRef<NodeJS.Timeout | null>(null);

  const { top } = useSafeAreaInsets();

  const { hide } = usePopupContext();

  const { style: slide } = useSlideAnimationStyle({
    translateY: -10,
  });

  const { style: fade } = useFadeAnimationStyle();

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(hide, 2000);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback
        onPress={() => {
          onPress && onPress();
        }}>
        <Animated.View style={[slide, fade, styles.container, { top }]}>
          {iconName && <SvgIcon iconName={iconName} color="white" size={24} />}
          <View>
            <Font type="semibold_14" color="white" text={text} />
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  container: {
    width: DEVICE_CONSTANTS.WIDTH - 40,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#111111',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
});

export default createPopup(Toast);
