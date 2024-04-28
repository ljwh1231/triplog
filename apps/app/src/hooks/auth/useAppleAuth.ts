import { useNavigationService } from '@hooks/navigation';
import appleAuth from '@invertase/react-native-apple-authentication';
import { API, authApi } from '@repo/apis';
import { useAuthStore } from '@store/auth/useAuthStore';
import { AuthType } from '@types';
import jwtDecode from 'jwt-decode';

const useAppleAuth = () => {
  const { navigate } = useNavigationService();

  const { setUser } = useAuthStore();

  const handleAppleAuth = async () => {
    const { identityToken, fullName, user } = await appleAuth.performRequest({
      requestedScopes: [appleAuth.Scope.FULL_NAME],
    });

    if (identityToken) {
      const decoded = jwtDecode(identityToken) as AuthType.AppleAuthResponse;

      const res = await authApi.signUp({
        authId: user,
        email: decoded.email,
        name: fullName?.nickname || '',
        authType: 'apple',
      });

      API.setAuthToken(res.token);

      setUser(await authApi.signIn());

      navigate('HomeScreen');
    }
  };

  return {
    handleAppleAuth,
  };
};

export default useAppleAuth;
