import { DEVICE_CONSTANTS } from '@constants';
import { StyleSheet, Text, View } from 'react-native';

type NavBarTitleProps = {
  title: string;
};

const NavBarTitle = (props: NavBarTitleProps) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    height: 50,
    left: DEVICE_CONSTANTS.WIDTH * 0.2,
    width: DEVICE_CONSTANTS.WIDTH * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavBarTitle;
