import { useMemo } from 'react';
import output from '../../../assets/map.path/output';

const useDetailMapPathList = () => {
  const mapPathList = useMemo(() => {
    return output;
  }, []);

  const getPathByName = (name: string) => {
    return mapPathList.find((p) => p.name === name);
  };

  return {
    mapPathList,
    getPathByName,
  };
};

export default useDetailMapPathList;
