import SvgIcon from '@components/SvgIcon';
import { SvgIconKey } from '@components/SvgIcon/svgicon.type';
import { UI_CONSTANTS } from '@constants';
import { useEffect, useRef, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

export type SingleLineProps = {
  text: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  iconName?: SvgIconKey;
} & Omit<TextInputProps, 'value' | 'onChangeText' | 'onFocus' | 'autoFocus'>;

const SingleLine = (props: SingleLineProps) => {
  const ref = useRef<TextInput>(null);

  const {
    text,
    onChangeText,
    onFocus,
    style,
    autoFocus,
    iconName,
    ...textInputProps
  } = props;

  const [focused, setFocused] = useState(false);

  const getFocusStyle = (): StyleProp<TextStyle> => {
    if (focused) {
      return {
        borderWidth: 1,
        borderColor: '#111111',
      };
    }
    return {
      borderWidth: 1,
      backgroundColor: '#F5F5F5',
      borderColor: '#F5F5F5',
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
    <View style={[styles.container, getFocusStyle()]}>
      {iconName && <SvgIcon iconName="magnifying" size={24} />}
      <TextInput
        ref={ref}
        value={text}
        onChangeText={onChangeText}
        style={[styles.textInput, style]}
        placeholderTextColor={'#AAAAAA'}
        onFocus={() => {
          setFocused(true);
          onFocus && onFocus();
        }}
        onBlur={() => setFocused(false)}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: '100%',
  },
});

export default SingleLine;
