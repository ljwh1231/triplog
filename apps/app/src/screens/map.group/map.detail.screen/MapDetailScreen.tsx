import NavBar from '@components/NavBar';
import ScreenTemplate from '@components/ScreenTemplate';
import SvgMapItem from '@components/SvgMapItem';
import { useDetailMapPathList } from '@hooks/map';
import { useNavigationRoute, useNavigationService } from '@hooks/navigation';
import OptimizeDeviceMap from '@lib/OptimizeDeviceMap';
import { ScreenType } from '@types';
import { mapUtils } from '@utils';
import { Dimensions, StyleSheet, View } from 'react-native';
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

  const { goBack } = useNavigationService();

  const mapData = OptimizeDeviceMap.getMapPathByName(name);

  if (!mapData) return <></>;

  const { viewBox, width, height } = mapUtils.getSingleSvgItemStyle({
    path: mapData.path,
    itemWidth: Dimensions.get('screen').width - 40,
  });

  return (
    <ScreenTemplate
      NavBar={
        <NavBar
          title={name}
          leftComponent={<NavBar.Icon iconName="arrowLeft" onPress={goBack} />}
        />
      }>
      <View style={styles.mapItemContainer}>
        <Svg
          viewBox={viewBox}
          style={{
            width,
            height,
          }}>
          <SvgMapItem path={mapData.path} name={name} useText={false} />
        </Svg>
      </View>
    </ScreenTemplate>
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
