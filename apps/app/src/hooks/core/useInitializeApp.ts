import { useAsyncEffect } from '@hooks/common';
import { API, authApi } from '@repo/apis';
import { useAuthStore } from '@store/auth/useAuthStore';
import { useState } from 'react';
import { getAccessTokenStorage } from 'src/storages/auth.storage';

const useInitializeApp = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const { setUser } = useAuthStore();

  useAsyncEffect(async () => {
    const accessToken = getAccessTokenStorage();

    API.initialize({
      baseURL: 'http://43.203.226.156:3001',
      headers: {},
    });

    if (accessToken) {
      API.setAuthToken(accessToken);
      setUser(await authApi.signIn());
    }

    setIsInitialized(true);
  }, []);

  return {
    isInitialized,
  };
};

export default useInitializeApp;
