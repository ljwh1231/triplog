import Font from '@components/Font/Font';
import TextInput from '@components/TextInput';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  FullScreenLayout,
  FullScreenOverlay,
  createPopup,
  useFadeAnimationStyle,
  usePopupContext,
} from 'react-native-global-components';
import Animated from 'react-native-reanimated';

const AddMapPopup = () => {
  const { hide } = usePopupContext();

  const [mapName, setMapName] = useState('');

  const { style: fadeStyle } = useFadeAnimationStyle();

  return (
    <FullScreenLayout>
      <FullScreenOverlay onPress={hide} />
      <Animated.View style={[fadeStyle, styles.container]}>
        <View style={styles.textContainer}>
          <Font type="bold_20" text={'지도 추가하기'} />
        </View>
        <TextInput.SingleLine
          placeholder="지도 이름을 입력해주세요"
          text={mapName}
          onChangeText={setMapName}
          autoFocus
        />
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
    padding: 20,
  },
  textContainer: {
    paddingVertical: 20,
    gap: 16,
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default createPopup(AddMapPopup);
