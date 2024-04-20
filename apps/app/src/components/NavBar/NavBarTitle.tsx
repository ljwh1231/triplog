import Font from '@components/Font/Font';
import { DEVICE_CONSTANTS } from '@constants';
import { StyleSheet, View } from 'react-native';

type NavBarTitleProps = {
  title: string;
};

const NavBarTitle = (props: NavBarTitleProps) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Font type="bold_20" text={title} />
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
