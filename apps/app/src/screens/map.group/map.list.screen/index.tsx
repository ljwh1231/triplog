import SvgMapItem from '@components/SvgMapItem';
import { useDetailMapPathList } from '@hooks/map';
import { ScreenType } from '@types';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Svg } from 'react-native-svg';

export type MapListScreenParams = {
  MapListScreen: undefined;
};

const MapListScreen = () => {
  const { mapPathList } = useDetailMapPathList();

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const translateValue = useSharedValue({ x: 0, y: 0 });
  const savedTranslateValue = useSharedValue({ x: 0, y: 0 });

  const pinchHandler = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const panHandler = Gesture.Pan()
    .onUpdate((e) => {
      translateValue.value = {
        x: savedTranslateValue.value.x + e.translationX / scale.value,
        y: savedTranslateValue.value.y + e.translationY / scale.value,
      };
    })
    .onEnd(() => {
      savedTranslateValue.value = translateValue.value;
    });

  const composedGesture = Gesture.Race(pinchHandler, panHandler);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      {
        translateX: translateValue.value.x,
      },
      {
        translateY: translateValue.value.y,
      },
    ],
  }));

  if (!mapPathList) return <></>;

  return (
    <View style={styles.container}>
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[animatedStyle]}>
          <Svg viewBox={'0 0 1000 1000'}>
            {mapPathList.map((path, index) => {
              return <SvgMapItem key={`${path.name}-${index}`} {...path} />;
            })}
          </Svg>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default {
  Screen: MapListScreen,
  name: 'MapListScreen',
} as ScreenType.ScreenType;
