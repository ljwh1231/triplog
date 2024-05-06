import { useQuery } from '@tanstack/react-query';
import getAuthQueryKey from './getAuthQueryKey';
import { authApi } from '@repo/apis';

const useUserInfo = () => {
  return useQuery({
    queryKey: getAuthQueryKey('USER_INFO'),
    queryFn: () => authApi.getProfile(),
  });
};

export default useUserInfo;
