import Font from '@components/Font/Font';
import TextInput from '@components/TextInput';
import { SingleLineProps } from '@components/TextInput/SingleLine';
import { useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  FullScreenOverlay,
  KeyboardAvoidingLayout,
  createPopup,
  useFadeAnimationStyle,
  usePopupContext,
} from 'react-native-global-components';
import Animated from 'react-native-reanimated';

type InputPopupProps = {
  title: string;
  inputProps: Omit<SingleLineProps, 'text' | 'onChangeText'>;
  onPressOk: (text: string) => void | Promise<void>;
  onPressCancel?: () => void;
  okText: string;
  cancelText: string;
};

const InputPopup = (props: InputPopupProps) => {
  const { title, inputProps, onPressOk, onPressCancel, okText, cancelText } =
    props;

  const [text, setText] = useState('');

  const { hide } = usePopupContext();

  const { style: fadeStyle } = useFadeAnimationStyle();

  const handlePressOk = async () => {
    await onPressOk(text);
    await hide();
  };

  const handlePressCancel = async () => {
    await hide();
    onPressCancel && onPressCancel();
  };

  return (
    <KeyboardAvoidingLayout
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-120}>
      <FullScreenOverlay onPress={hide} />
      <Animated.View style={[fadeStyle, styles.container]}>
        <View style={styles.textContainer}>
          <Font type="bold_20" text={title} />
        </View>
        <TextInput.SingleLine
          text={text}
          onChangeText={setText}
          {...inputProps}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePressOk}>
            <View
              style={[styles.button, { borderWidth: 1, borderColor: 'black' }]}>
              <Font type="semibold_16" text={okText} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressCancel}>
            <View style={styles.button}>
              <Font type="semibold_16" text={cancelText} />
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </KeyboardAvoidingLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 330,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 20,
  },
  textContainer: {
    paddingVertical: 20,
    gap: 16,
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonContainer: { gap: 4, width: '100%', paddingTop: 12 },
  button: {
    width: '100%',
    height: 52,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default createPopup(InputPopup);
