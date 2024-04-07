import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import FONTS, { FontType } from './Font.type';

type FontProps = {
  type: FontType;
  text: string;
  style?: StyleProp<TextStyle>;
  textProps?: TextProps;
  color?: string;
};

const Font = (props: FontProps) => {
  const { type, text, color = 'black', textProps = {}, style: _style } = props;

  const { fontSize, fontFamily, lineHeight, fontWeight } = FONTS[type];

  const { style, ..._textProps } = textProps;

  return (
    <Text
      {..._textProps}
      allowFontScaling={false}
      style={StyleSheet.flatten([
        style,
        {
          fontSize,
          fontFamily,
          lineHeight,
          color,
          fontWeight,
        },
        _style,
      ])}>
      {text}
    </Text>
  );
};

export default Font;
