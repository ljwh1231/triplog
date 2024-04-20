import Font from '@components/Font/Font';
import SvgIcon from '@components/SvgIcon';
import { SvgIconKey } from '@components/SvgIcon/svgicon.type';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export type ButtonProps = {
  text: string;
  iconName?: SvgIconKey;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};

const Button = (props: ButtonProps) => {
  const { text, iconName, style, fontStyle, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([styles.container, style])}>
      <View style={StyleSheet.flatten([styles.container, style])}>
        {iconName && <SvgIcon iconName={iconName} size={24} />}
        <Font type="semibold_18" color="white" style={fontStyle} text={text} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    gap: 2,
    backgroundColor: '#0075FF',
  },
});

export default Button;
