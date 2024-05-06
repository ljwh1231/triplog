import { MapType } from '@repo/global-type';
import { View } from 'react-native';

type HistoryListItemProps = {
  width: number;
  map: MapType.Map;
};

const tempRatio = 220 / 160;

const HistoryListItem = (props: HistoryListItemProps) => {
  const { width, map } = props;

  return (
    <View
      style={{
        width,
        height: width * tempRatio,
        backgroundColor: 'yellow',
      }}></View>
  );
};

export default HistoryListItem;
