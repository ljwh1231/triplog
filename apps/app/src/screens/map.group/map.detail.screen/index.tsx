import Button from '@components/Button';
import KeyboardScreenTemplate from '@components/KeyboardScreenTemplate';
import NavBar from '@components/NavBar';
import SvgMapItem from '@components/SvgMapItem';
import TextInput from '@components/TextInput';
import { useNavigationRoute, useNavigationService } from '@hooks/navigation';
import OptimizeDeviceMap from '@lib/OptimizeDeviceMap';
import { ScreenType } from '@types';
import { mapUtils } from '@utils';
import { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Svg } from 'react-native-svg';

export type MapDetailScreenParams = {
  MapDetailScreen: {
    name: string;
  };
};

const MapDetailScreen = () => {
  const {
    params: { name },
  } = useNavigationRoute('MapDetailScreen');

  const [text, setText] = useState('');

  const { goBack } = useNavigationService();

  const mapData = OptimizeDeviceMap.getMapPathByName(name);

  if (!mapData) return <></>;

  const { viewBox, width, height } = mapUtils.getSingleSvgItemStyle({
    path: mapData.path,
    itemWidth: Dimensions.get('screen').width - 40,
    detail: true,
  });

  return (
    <KeyboardScreenTemplate
      NavBar={
        <NavBar
          title={name}
          leftComponent={<NavBar.Icon iconName="arrowLeft" onPress={goBack} />}
        />
      }>
      <ScrollView style={styles.container}>
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
            />
          </Svg>
          <TextInput.MultiLine
            text={text}
            onChangeText={setText}
            placeholder="여행을 생생하게 기록해보세요 :)"
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
