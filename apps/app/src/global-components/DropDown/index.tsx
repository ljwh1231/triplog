import Font from '@components/Font/Font';
import { FlatList, ListRenderItem, View } from 'react-native';
import {
  FullScreenLayout,
  FullScreenOverlay,
  createPopup,
  useFadeAnimationStyle,
} from 'react-native-global-components';
import Animated from 'react-native-reanimated';

type DropDownItem = {
  text: string;
  onPress: () => void;
};

type DropDownProps = {
  right: number;
  top: number;
  list: DropDownItem[];
};

const DropDown = (props: DropDownProps) => {
  const { right, top, list } = props;

  const { style } = useFadeAnimationStyle();

  const renderItem: ListRenderItem<DropDownItem> = ({ item }) => {
    return (
      <View style={{ padding: 12 }}>
        <Font type="medium_16" text={item.text} />
      </View>
    );
  };

  return (
    <FullScreenLayout>
      <FullScreenOverlay hideOnPressOverlay={true} maxOpacity={0} />
      <Animated.View
        style={[
          style,
          {
            position: 'absolute',
            right,
            top,
            borderRadius: 12,
          },
        ]}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.text + index.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{ width: '100%', height: 1, backgroundColor: 'black' }}
            />
          )}
          style={{
            borderRadius: 12,
            backgroundColor: 'white',
            width: 250,
            borderColor: 'black',
            borderWidth: 1,
          }}
        />
      </Animated.View>
    </FullScreenLayout>
  );
};

export default createPopup(DropDown);
