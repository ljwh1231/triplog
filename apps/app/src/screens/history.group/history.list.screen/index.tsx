import NavBar from '@components/NavBar';
import ScreenTemplate from '@components/ScreenTemplate';
import { useNavigationService } from '@hooks/navigation';
import { ScreenType } from '@types';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HistoryListItem from './component/HistoryListItem';
import { useCallback } from 'react';
import { DEVICE_CONSTANTS } from '@constants';
import useMyMapList from '@react-query/map/useMyMapList';
import { MapType } from '@repo/global-type';

export type HistoryListScreenParams = {
  HistoryListScreen: undefined;
};

const HistoryListScreen = () => {
  const { goBack } = useNavigationService();

  const itemWidth = (DEVICE_CONSTANTS.WIDTH - 40) / 2 - 4;

  const { data } = useMyMapList();

  const maps = data?.maps || [];

  const renderItem: ListRenderItem<MapType.Map> = useCallback(({ item }) => {
    return <HistoryListItem width={itemWidth} map={item} />;
  }, []);

  return (
    <ScreenTemplate
      NavBar={
        <NavBar
          title="여행 기록 모아보기"
          leftComponent={<NavBar.Icon iconName="arrowLeft" onPress={goBack} />}
        />
      }
      useBottomPadding={false}>
      <FlatList
        data={maps}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        style={{
          paddingHorizontal: 20,
          width: '100%',
        }}
        contentContainerStyle={{
          rowGap: 8,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        numColumns={2}
      />
    </ScreenTemplate>
  );
};

export default {
  Screen: HistoryListScreen,
  name: 'HistoryListScreen',
} as ScreenType.ScreenType;
