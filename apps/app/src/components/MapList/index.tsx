import SvgMapItem from '@components/SvgMapItem';
import { DEVICE_CONSTANTS } from '@constants';
import { useDetailMapPathList } from '@hooks/map';
import OptimizeDeviceMap from '@lib/OptimizeDeviceMap';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Svg from 'react-native-svg';

type MapListProps = {
  onPressItem?: (name: string) => void;
};

const MapList = (props: MapListProps) => {
  const { onPressItem } = props;

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

  return (
    <View style={styles.container}>
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[animatedStyle]}>
          <Svg viewBox={'0 0 500 500'}>
            {OptimizeDeviceMap.getMapData().map((path, index) => {
              return (
                <SvgMapItem
                  key={`${path.name}-${index}`}
                  {...path}
                  onPress={() => onPressItem && onPressItem(path.name)}
                />
              );
            })}
          </Svg>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DEVICE_CONSTANTS.WIDTH,
  },
});

export default MapList;
