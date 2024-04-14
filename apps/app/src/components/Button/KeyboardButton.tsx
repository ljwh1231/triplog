import { useKeyboard } from '@hooks/ui';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button, { ButtonProps } from './Button';

const KeyboardButton = (props: ButtonProps) => {
  const { isKeyboardVisible } = useKeyboard();

  const { bottom } = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => ({
    paddingBottom: isKeyboardVisible ? 0 : bottom || 8,
    paddingHorizontal: isKeyboardVisible ? 0 : 20,
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Button {...props} style={{ borderRadius: isKeyboardVisible ? 0 : 12 }} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default KeyboardButton;
