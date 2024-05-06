import { useQuery } from '@tanstack/react-query';
import getMapQueryKey from './getMapQueryKey';
import { useAuthStore } from '@store/auth/useAuthStore';
import { mapApi } from '@repo/apis';

const useMyMapList = () => {
  const { user } = useAuthStore();

  return useQuery({
    queryKey: getMapQueryKey('MY_MAP_LIST'),
    queryFn: () => mapApi.getMyMapList(),
    enabled: !!user?.email,
  });
};

export default useMyMapList;
