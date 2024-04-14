import Button from '@components/Button';
import KeyboardScreenTemplate from '@components/KeyboardScreenTemplate';
import NavBar from '@components/NavBar';
import TextInput from '@components/TextInput';
import { useNavigationService } from '@hooks/navigation';
import { ScreenType } from '@types';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MapSearchNavBar from './component/MapSearchNavBar';
import Font from '@components/Font/Font';

export type MapSearchScreenParams = {
  MapSearchScreen: undefined;
};

const MapSearchScreen = () => {
  const { navigate } = useNavigationService();

  const [text, setText] = useState('');

  return (
    <KeyboardScreenTemplate NavBar={<MapSearchNavBar />}>
      <ScrollView style={styles.container} contentContainerStyle={{ gap: 16 }}>
        <Font type="bold_24" text="어디에 다녀오셨나요?" />
        <TextInput.SingleLine
          text={text}
          onChangeText={setText}
          autoFocus
          iconName="magnifying"
          placeholder="여행지를 입력해주세요"
        />
      </ScrollView>
      <Button.KeyboardButton
        text="여행 기록하기"
        onPress={() => {
          console.log('hihi');
        }}
      />
    </KeyboardScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default {
  Screen: MapSearchScreen,
  name: 'MapSearchScreen',
} as ScreenType.ScreenType;
