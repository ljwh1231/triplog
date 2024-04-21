import { useKeyboard } from '@hooks/ui';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button, { ButtonProps } from './Button';

const KeyboardButton = (props: ButtonProps) => {
  const { isKeyboardVisible } = useKeyboard();

  const { bottom } = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => ({
    paddingBottom: isKeyboardVisible ? 8 : bottom,
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Button {...props} style={{ borderRadius: 12 }} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default KeyboardButton;
