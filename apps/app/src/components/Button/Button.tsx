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

type ButtonProps = {
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
        <Font type="semibold_18" style={fontStyle} text={text} />
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
    borderRadius: 100,
    gap: 2,
    backgroundColor: 'red',
  },
});

export default Button;
