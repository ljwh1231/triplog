import { View } from 'react-native';

type HistoryListItemProps = {
  width: number;
  item: number;
};

const tempRatio = 220 / 160;

const HistoryListItem = (props: HistoryListItemProps) => {
  const { width, item } = props;

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
