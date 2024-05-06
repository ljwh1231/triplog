import Font from '@components/Font/Font';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  FullScreenLayout,
  FullScreenOverlay,
  createPopup,
  usePopupContext,
} from 'react-native-global-components';
import SelectMapItem from './component/SelectMapItem';
import AddMapItem from './component/AddMapItem';
import useCloseBottomSheetAnimation from '../hook/useCloseBottomSheetAnimation';
import useMyMapList from '@react-query/map/useMyMapList';
import { useSelectedMapStore } from '@store/map/useSelectedMap';

const SelectMapBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { hide } = usePopupContext();

  const { data } = useMyMapList();

  const maps = data?.maps || [];

  const { selectedMap } = useSelectedMapStore();

  const closeBottomSheet = async () => {
    bottomSheetRef.current?.close();
    await hide();
  };

  useEffect(() => {
    bottomSheetRef.current?.present();
  }, []);

  useCloseBottomSheetAnimation({
    bottomSheetRef,
  });

  return (
    <BottomSheetModalProvider>
      <FullScreenLayout>
        <FullScreenOverlay onPress={closeBottomSheet} />
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['50%']}
          onDismiss={closeBottomSheet}>
          <ScrollView style={styles.container}>
            <Font type="bold_20" text={'지도 선택'} />
            <View style={styles.itemContainer}>
              {maps.map((d) => (
                <SelectMapItem
                  map={d}
                  selected={selectedMap?.id === d.id}
                  key={d.id}
                />
              ))}
              <AddMapItem />
            </View>
          </ScrollView>
        </BottomSheetModal>
      </FullScreenLayout>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 20,
  },
  itemContainer: {
    flex: 1,
    gap: 12,
    paddingTop: 16,
  },
});

export default createPopup(SelectMapBottomSheet);
