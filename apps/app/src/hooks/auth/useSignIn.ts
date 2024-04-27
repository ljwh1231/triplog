import { getAuthQueryKey } from '@react-query/auth';
import { AuthApiType, authApi } from '@repo/apis';
import { authStorage } from '@storages';
import { useQueryClient } from '@tanstack/react-query';

const useSignIn = () => {
  const queryClient = useQueryClient();

  const signIn = async (params: AuthApiType.SignUpParams) => {
    try {
      const res = await authApi.signUp(params);

      authStorage.setAccessTokenStorage(res.token);

      await queryClient.fetchQuery({
        queryKey: getAuthQueryKey('USER_INFO'),
      });
    } catch (e) {
      console.error('Error on sign in', e);
    }
  };

  return {
    signIn,
  };
};

export default useSignIn;
