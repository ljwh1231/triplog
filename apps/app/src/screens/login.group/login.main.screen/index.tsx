import Button from '@components/Button/Button';
import ScreenTemplate from '@components/ScreenTemplate';
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
    <ScreenTemplate>
      <View style={styles.container}>
        <Button
          text="카카오로 3초 만에 시작하기"
          iconName="kakao"
          onPress={handleKakaoAuth}
          style={{ backgroundColor: '#FEE601' }}
        />
        <Button
          text="Apple로 로그인"
          iconName="apple"
          onPress={handleAppleAuth}
          style={{ backgroundColor: 'black' }}
          fontStyle={{ color: 'white' }}
        />
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 12,
    width: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default {
  Screen: LoginMainScreen,
  name: 'LoginMainScreen',
} as ScreenType.ScreenType;
