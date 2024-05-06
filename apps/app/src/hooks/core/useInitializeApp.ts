import { useAsyncEffect } from '@hooks/common';
import { API, authApi } from '@repo/apis';
import { authStorage } from '@storages';
import { useAuthStore } from '@store/auth/useAuthStore';
import { useState } from 'react';

const useInitializeApp = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const { setUser } = useAuthStore();

  useAsyncEffect(async () => {
    try {
      const accessToken = authStorage.getAccessTokenStorage();

      API.initialize({
        baseURL: 'http://3.36.92.207:3001',
        headers: {},
      });

      if (accessToken) {
        API.setAuthToken(accessToken);

        setUser(await authApi.getProfile());
      }
    } catch (e) {
      authStorage.deleteAccessTokenStorage();
    } finally {
      setIsInitialized(true);
    }
  }, []);

  return {
    isInitialized,
  };
};

export default useInitializeApp;
