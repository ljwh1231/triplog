import SvgMapItem from '@components/SvgMapItem';
import { useDetailMapPathList } from '@hooks/map';
import { useNavigationRoute } from '@hooks/navigation';
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
  const { getPathByName } = useDetailMapPathList();

  const {
    params: { name },
  } = useNavigationRoute('MapDetailScreen');

  const mapData = getPathByName(name);

  if (!mapData) return <></>;

  const { viewBox, width, height } = mapUtils.getSingleSvgItemStyle({
    path: mapData.path,
    itemWidth: Dimensions.get('screen').width,
  });

  return (
    <View style={styles.container}>
      <Svg
        viewBox={viewBox}
        style={{
          width,
          height,
          backgroundColor: 'yellow',
        }}>
        <SvgMapItem path={mapData.path} name={name} />
      </Svg>
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
  Screen: MapDetailScreen,
  name: 'MapDetailScreen',
} as ScreenType.ScreenType;
