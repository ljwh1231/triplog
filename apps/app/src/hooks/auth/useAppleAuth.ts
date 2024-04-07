import { useNavigationService } from '@hooks/navigation';
import appleAuth from '@invertase/react-native-apple-authentication';
import { supabase } from '@lib/Supabase';
import { AuthType } from '@types';
import { jwtDecode } from 'jwt-decode';

const useAppleAuth = () => {
  const { navigate } = useNavigationService();
  const handleAppleAuth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'apple',
    });

    // const { identityToken } = await appleAuth.performRequest({
    //   requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    // });

    // if (identityToken) {
    // const token = jwtDecode(identityToken) as AuthType.AppleAuthResponse;

    // supabase.auth.signInWithIdToken({
    //   provider: "apple",

    // })
    // }
  };

  return {
    handleAppleAuth,
  };
};

export default useAppleAuth;
