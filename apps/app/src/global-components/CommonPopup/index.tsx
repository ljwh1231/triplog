import Font from '@components/Font/Font';
import { StyleSheet, View } from 'react-native';
import {
  FullScreenLayout,
  FullScreenOverlay,
  createPopup,
  useFadeAnimationStyle,
} from 'react-native-global-components';
import Animated from 'react-native-reanimated';
import { CommonPopupItem } from './CommonPopup.type';
import { CommonPopupTextStyle } from './CommonPopup.constant';
import { TouchableOpacity } from 'react-native-gesture-handler';

type CommonPopupProps = {
  title: string;
  description: string;
  list: CommonPopupItem[];
};

const CommonPopup = (props: CommonPopupProps) => {
  const { title, description, list } = props;

  const { style } = useFadeAnimationStyle({});

  const renderItem = (item: CommonPopupItem) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Font
          type="regular_16"
          style={CommonPopupTextStyle[item.type]}
          text={item.text}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FullScreenLayout>
      <FullScreenOverlay hideOnPressOverlay />
      <Animated.View style={[style]}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Font type="semibold_16" text={title} style={{ color: 'red' }} />
            <Font type="regular_14" text={description} />
          </View>
          <View style={{ width: '100%' }}>
            {list.map((item) => renderItem(item))}
          </View>
        </View>
      </Animated.View>
    </FullScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 330,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
  },
  textContainer: {
    padding: 20,
    gap: 16,
    alignItems: 'center',
  },
  item: {
    width: '100%',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default createPopup(CommonPopup);
