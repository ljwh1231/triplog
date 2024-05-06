import AutoHeightImage from '@components/AutoHeightImage';
import Button from '@components/Button/Button';
import Font from '@components/Font/Font';
import ScreenTemplate from '@components/ScreenTemplate';
import { DEVICE_CONSTANTS } from '@constants';
import { useAppleAuth } from '@hooks/auth';
import useKakaoAuth from '@hooks/auth/useKakaoAuth';
import { ScreenType } from '@types';
import { StyleSheet, View } from 'react-native';

export type LoginMainScreenParams = {
  LoginMainScreen: undefined;
};

const LoginMainScreen = () => {
  const { handleAppleAuth } = useAppleAuth();

  const { handleKakaoAuth } = useKakaoAuth();

  return (
    <ScreenTemplate useBottomPadding={false} useTopPadding={false}>
      <View style={{ flex: 1, backgroundColor: '#0066FF' }}>
        <View style={styles.imageContainer}>
          <AutoHeightImage
            useLocal={true}
            image="LoginImg"
            width={DEVICE_CONSTANTS.WIDTH - 60}
          />
        </View>
        <View style={styles.text}>
          <Font
            type="bold_24"
            color="white"
            text={`지금 트립로그와 함께\n여행의 추억을 기록해보세요!`}
            style={{ textAlign: 'center' }}
          />
          <Font
            type="medium_14"
            color="white"
            text="간단하게 채우는 나만의 여행지도"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="카카오로 3초 만에 시작하기"
            iconName="kakao"
            onPress={handleKakaoAuth}
            style={{ backgroundColor: '#FEE601' }}
            fontStyle={{ color: 'black' }}
          />
          <Button
            text="Apple로 로그인"
            iconName="apple"
            onPress={handleAppleAuth}
            style={{ backgroundColor: 'black' }}
            fontStyle={{ color: 'white' }}
          />
        </View>
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 12,
    paddingTop: 40,
    width: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  imageContainer: {
    paddingTop: 100,
    paddingHorizontal: 40,
  },
  text: {
    paddingTop: 70,
    gap: 8,
    alignItems: 'center',
  },
});

export default {
  Screen: LoginMainScreen,
  name: 'LoginMainScreen',
} as ScreenType.ScreenType;
