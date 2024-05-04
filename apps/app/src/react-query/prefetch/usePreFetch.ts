import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

type PrefetchQueryItem = {
  // 다른 Query 추가 될 때 매다 type 추가
  queryKey: string[];
  queryFn: (...args: any[]) => Promise<any>;
};

const usePrefetchQuery = () => {
  const queryClient = useQueryClient();

  // prefetch 하는 api 들 추가
  const prefetchQueryList = useMemo((): PrefetchQueryItem[] => {
    return [];
  }, []);

  const prefetchQuery = useCallback(() => {
    Promise.all(
      prefetchQueryList.map(({ queryKey, queryFn }) => {
        queryClient.prefetchQuery({
          queryKey: queryKey,
          queryFn: queryFn,
        });
      }),
    );
  }, []);

  return {
    prefetchQuery,
  };
};

export default usePrefetchQuery;
