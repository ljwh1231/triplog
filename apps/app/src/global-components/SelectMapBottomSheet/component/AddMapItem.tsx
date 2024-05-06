import Font from '@components/Font/Font';
import SvgIcon from '@components/SvgIcon';
import { mapApi } from '@repo/apis';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PopupManager } from 'react-native-global-components';
import InputPopup from 'src/global-components/InputPopup';
import Toast from 'src/global-components/Toast';

const AddMapItem = () => {
  const handlePressOk = async (name: string) => {
    try {
      await mapApi.createMap({ name });

      Toast.show({
        text: '추가가 완료되었어요',
        iconName: 'check',
      });
    } catch (e) {
      console.error('[Error on create map] : ', e);
    }
  };

  const handlePress = async () => {
    await PopupManager.hideAll();

    InputPopup.show({
      title: '지도 추가하기',
      inputProps: {
        placeholder: '지도명을 입력해주세요',
        autoFocus: true,
      },
      onPressOk: async (text) => {
        handlePressOk(text);
      },
      okText: '추가하기',
      cancelText: '취소',
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container]}>
        <SvgIcon iconName="plus" color={'#000000'} size={24} />
        <Font type="semibold_16" text={'지도 추가하기'} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
});

export default AddMapItem;
