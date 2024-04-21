import { UI_CONSTANTS } from '@constants';
import { useEffect, useRef, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

type MultiLineProps = {
  text: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
} & Omit<TextInputProps, 'value' | 'onChangeText' | 'onFocus'>;

const MultiLine = (props: MultiLineProps) => {
  const { text, onChangeText, onFocus, style, autoFocus, ...textInputProps } =
    props;

  const ref = useRef<TextInput>(null);

  const [focused, setFocused] = useState(false);

  const getFocusStyle = (): StyleProp<TextStyle> => {
    if (focused) {
      return {
        borderWidth: 1,
        borderColor: '#111111',
      };
    }
    return {
      borderWidth: 0,
      backgroundColor: '#F5F5F5',
    };
  };

  useEffect(() => {
    if (autoFocus) {
      const timeout = setTimeout(() => {
        ref.current?.focus();
      }, UI_CONSTANTS.DEFAULT_SAFE_KEYBOARD_TIMEOUT);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [autoFocus]);

  return (
    <TextInput
      ref={ref}
      multiline
      value={text}
      onChangeText={onChangeText}
      style={[styles.textInput, getFocusStyle(), style]}
      placeholderTextColor={'#AAAAAA'}
      onFocus={(e) => {
        setFocused(true);
        onFocus && onFocus();
      }}
      onBlur={() => setFocused(false)}
      {...textInputProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  textInput: {
    height: 150,
    borderRadius: 12,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default MultiLine;
