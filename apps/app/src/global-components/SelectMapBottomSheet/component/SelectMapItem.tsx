import Font from '@components/Font/Font';
import SvgIcon from '@components/SvgIcon';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type SelectMapItemProps = {
  item: {
    title: string;
  };
  selected: boolean;
};

const SelectMapItem = (props: SelectMapItemProps) => {
  const { item, selected } = props;

  const getStyle = (): {
    container: StyleProp<ViewStyle>;
    color: string;
  } => {
    if (selected) {
      return {
        container: {
          backgroundColor: '#EFF6FF',
          borderColor: '#0075FF',
        },
        color: '#0075FF',
      };
    }
    return {
      container: {
        backgroundColor: 'white',
        borderColor: '#DDDDDD',
      },
      color: '#DDDDDD',
    };
  };

  const { container, color } = getStyle();

  return (
    <TouchableOpacity>
      <View style={[styles.container, container]}>
        <SvgIcon iconName="check" color={color} size={24} />
        <Font type="semibold_16" text={item.title} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
  },
});

export default SelectMapItem;
