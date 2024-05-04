import Font from '@components/Font/Font';
import SvgIcon from '@components/SvgIcon';
import { useNavigationService } from '@hooks/navigation';
import { useAuthStore } from '@store/auth/useAuthStore';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import SelectMapBottomSheet from 'src/global-components/SelectMapBottomSheet';

const SelectMap = () => {
  const { user } = useAuthStore();

  const { navigate } = useNavigationService();

  const handlePress = () => {
    if (!user) {
      return navigate('LoginMainScreen');
    }
    return SelectMapBottomSheet.show({});
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Font type="bold_20" text={'asd'} />
        <SvgIcon iconName="arrowDown" size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2,
    width: 100,
    alignItems: 'center',
  },
});

export default SelectMap;
