import SvgIcon from '@components/SvgIcon';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ColorPickerBottomSheet from 'src/global-components/ColorPickerBottomSheet';
import { useMapDetailContext } from '../context/MapDetailContex';

const MapDetailActions = () => {
  const { detailData, setDetailData } = useMapDetailContext();

  const handleChangeColor = (hex: string) => {
    setDetailData({ color: hex });
  };

  const handlePressPhoto = () => {
    return console.log('TODO');
  };

  const handlePressColorPicker = () => {
    return ColorPickerBottomSheet.show({
      onPress: handleChangeColor,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressPhoto}>
        <SvgIcon iconName="photo" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressColorPicker}>
        <SvgIcon iconName="colorPicker" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    alignItems: 'center',
    gap: 8,
  },
});

export default MapDetailActions;
