import Button from '@components/Button';
import KeyboardScreenTemplate from '@components/KeyboardScreenTemplate';
import NavBar from '@components/NavBar';
import SvgMapItem from '@components/SvgMapItem';
import TextInput from '@components/TextInput';
import { useNavigationRoute, useNavigationService } from '@hooks/navigation';
import OptimizeDeviceMap from '@lib/OptimizeDeviceMap';
import { ScreenType } from '@types';
import { mapUtils } from '@utils';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Svg } from 'react-native-svg';
import {
  MapDetailContextProvider,
  useMapDetailContext,
} from './context/MapDetailContext';
import MapDetailActions from './component/MapDetailActions';
import { useKeyboard } from '@hooks/ui';
import { useEffect, useRef } from 'react';

export type MapDetailScreenParams = {
  MapDetailScreen: {
    name: string;
  };
};

const MapDetailScreen = () => {
  const {
    params: { name },
  } = useNavigationRoute('MapDetailScreen');

  const mapData = OptimizeDeviceMap.getMapPathByName(name);

  if (!mapData) return <></>;

  return (
    <MapDetailContextProvider initialContext={{}}>
      <MapDetailScreenComponent mapData={mapData} />
    </MapDetailContextProvider>
  );
};

type MapDetailScreenComponentProps = {
  mapData: {
    path: string;
    name: string;
  };
};

const MapDetailScreenComponent = (props: MapDetailScreenComponentProps) => {
  const { mapData } = props;

  const scrollViewRef = useRef<ScrollView>(null);

  const { goBack } = useNavigationService();

  const {
    params: { name },
  } = useNavigationRoute('MapDetailScreen');

  const { viewBox, width, height } = mapUtils.getSingleSvgItemStyle({
    path: mapData.path,
    itemWidth: Dimensions.get('screen').width - 40,
    detail: true,
  });

  const { detailData, setDetailData } = useMapDetailContext();

  const onChangeContent = (content: string) => {
    return setDetailData({ content });
  };

  const { isKeyboardVisible } = useKeyboard();

  useEffect(() => {
    if (isKeyboardVisible) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [isKeyboardVisible]);

  return (
    <KeyboardScreenTemplate
      NavBar={
        <NavBar
          title={name}
          leftComponent={<NavBar.Icon iconName="arrowLeft" onPress={goBack} />}
        />
      }>
      <ScrollView style={styles.container} ref={scrollViewRef}>
        <View style={styles.mapItemContainer}>
          <Svg
            viewBox={viewBox}
            style={{
              width,
              height,
              marginBottom: 20,
            }}>
            <SvgMapItem
              path={mapData.path}
              name={name}
              useText={false}
              strokeWidth={0.05}
              fill={detailData.color || '#EDEEF2'}
            />
          </Svg>
          <MapDetailActions />
          <TextInput.MultiLine
            text={detailData.content}
            onChangeText={onChangeContent}
            placeholder="여행을 생생하게 기록해보세요 :)"
            title={'이번 여행은 어떠셨나요?'}
            autoFocus
          />
        </View>
      </ScrollView>
      <Button.KeyboardButton
        text="다음"
        onPress={() => {
          console.log('hihi');
        }}
      />
    </KeyboardScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapItemContainer: {
    padding: 20,
  },
});

export default {
  Screen: MapDetailScreen,
  name: 'MapDetailScreen',
} as ScreenType.ScreenType;
