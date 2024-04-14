import { useKeyboard } from '@hooks/ui';
import Button, { ButtonProps } from './Button';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const KeyboardButton = (props: ButtonProps) => {
  const { isKeyboardVisible } = useKeyboard();

  const { bottom } = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => ({
    paddingBottom: isKeyboardVisible ? 8 : bottom || 8,
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Button {...props} />
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
