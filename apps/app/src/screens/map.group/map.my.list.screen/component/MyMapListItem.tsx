import Font from '@components/Font/Font';
import { DEVICE_CONSTANTS } from '@constants';
import { StyleSheet, View } from 'react-native';
import Image from 'react-native-fast-image';

type MyMapListItemProps = {
  title: string;
  description: string;
  image: string;
};

const MyMapListItem = (props: MyMapListItemProps) => {
  const width = DEVICE_CONSTANTS.WIDTH - 40;

  return (
    <View style={styles.container}>
      <Font type="bold_20" text={props.title} />
      <Image
        source={{ uri: props.image }}
        style={{ width, height: width, borderRadius: 20 }}
        resizeMode="cover"
      />
      <Font type="medium_16" text={props.description} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
  },
});

export default MyMapListItem;
