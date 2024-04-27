import { API } from '@repo/apis';
import { useEffect, useState } from 'react';

const useInitializeApp = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  console.log(isInitialized);

  useEffect(() => {
    API.initialize({
      baseURL: 'https://jsonplaceholder.typicode.com',
      headers: {},
    });

    setIsInitialized(true);
  }, []);

  return {
    isInitialized,
  };
};

export default useInitializeApp;
