import Font from '@components/Font/Font';
import { useNavigationService } from '@hooks/navigation';
import { MapType } from '@repo/global-type';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type HistoryListItemProps = {
  width: number;
  map: MapType.Map;
};

const tempRatio = 220 / 160;

const HistoryListItem = (props: HistoryListItemProps) => {
  const { width, map } = props;

  const { navigate } = useNavigationService();

  const handlePress = () => {
    return navigate('MapMyListScreen', { id: map.id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          width,
          height: width * tempRatio,
          ...styles.container,
        }}>
        <View style={styles.textContainer}>
          <Font type="semibold_16" color="black" text={map.name} />
          <Font
            type="medium_14"
            color="black"
            text={map.createdAt.toString()}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  textContainer: {
    padding: 20,
    gap: 4,
    flexDirection: 'column',
  },
});

export default HistoryListItem;
