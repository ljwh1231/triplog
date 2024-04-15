import ScreenTemplate from '@components/ScreenTemplate';
import { useNavigationRoute } from '@hooks/navigation';
import { ScreenType } from '@types';
import { tsUtils } from '@utils';
import { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';
import MyMapListItem from './component/MyMapListItem';
import MyMapListNavBar from './component/MyMapListNavBar';

export type MapMyListScreenParams = {
  MapMyListScreen: {
    title: string;
  };
};

const dummy = [
  {
    title: '대구',
    image:
      'https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
    description: '대구 여행지',
  },
  {
    title: '대구2',
    image:
      'https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
    description: '대구 여행지',
  },
  {
    title: '대구3',
    image:
      'https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
    description: '대구 여행지',
  },
  {
    title: '대구4',
    image:
      'https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
    description: '대구 여행지',
  },
  {
    title: '대구5',
    image:
      'https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
    description: '대구 여행지',
  },
  {
    title: '대구6',
    image:
      'https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
    description: '대구 여행지',
  },
];

const MapMyListScreen = () => {
  const {
    params: { title },
  } = useNavigationRoute('MapMyListScreen');

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await tsUtils.delayForSeconds(2);
    setRefreshing(false);
  };

  const renderItem: ListRenderItem<(typeof dummy)[0]> = useCallback(
    ({ item }) => {
      return <MyMapListItem {...item} />;
    },
    [],
  );

  return (
    <ScreenTemplate
      NavBar={<MyMapListNavBar title={title} />}
      useBottomPadding={false}>
      <FlatList
        data={dummy}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          gap: 12,
          padding: 20,
        }}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
      />
    </ScreenTemplate>
  );
};

export default {
  Screen: MapMyListScreen,
  name: 'MapMyListScreen',
} as ScreenType.ScreenType;
