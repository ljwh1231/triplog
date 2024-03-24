import appleAuth, {
  AppleRequestScope,
} from '@invertase/react-native-apple-authentication';
import { AuthType } from '@types';
import { jwtDecode } from 'jwt-decode';

const useAppleAuth = () => {
  const handleAppleAuth = async () => {
    const { identityToken } = await appleAuth.performRequest({
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    if (identityToken) {
      const { email } = jwtDecode(identityToken) as AuthType.AppleAuthResponse;

      //   TODO : 로그인 처리
    }
  };

  return {
    handleAppleAuth,
  };
};

export default useAppleAuth;
