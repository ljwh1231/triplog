import { useNavigationService } from '@hooks/navigation';
import { getProfile, login } from '@react-native-seoul/kakao-login';
import { API, authApi } from '@repo/apis';
import { authStorage } from '@storages';
import { useAuthStore } from '@store/auth/useAuthStore';

const useKakaoAuth = () => {
  const { navigate } = useNavigationService();

  const { setUser } = useAuthStore();

  const handleKakaoAuth = async () => {
    try {
      await login();

      const profile = await getProfile();

      const { token } = await authApi.signUp({
        authType: 'kakao',
        name: profile.nickname,
        authId: profile.id.toString(),
        email: profile.email,
      });

      authStorage.setAccessTokenStorage(token);

      API.setAuthToken(token);

      setUser(await authApi.getProfile());

      navigate('HomeScreen');
    } catch (e) {
      console.error('Error on kakao', e);
    }
  };

  return {
    handleKakaoAuth,
  };
};

export default useKakaoAuth;
