import { API } from '@repo/apis';
import { useEffect, useState } from 'react';

const useInitializeApp = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    API.initialize({
      baseURL: 'http://43.203.226.156:3001',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiYXV0aElkIjoiMTIzNCIsImlhdCI6MTcxNDI0MDExOSwiZXhwIjoxNzE0ODQ0OTE5fQ.QlYcBNr6ug9Geal1x93g1wo0_18meDkUeNYy3IJn1Iw`,
      },
    });

    setIsInitialized(true);
  }, []);

  return {
    isInitialized,
  };
};

export default useInitializeApp;
