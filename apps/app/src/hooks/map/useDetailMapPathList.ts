import { useEffect, useState } from 'react';
import output from '../../../assets/map.path/output';
import { MapType } from '@types';

const useDetailMapPathList = () => {
  const [mapPathList, setMapPathList] = useState<MapType.MapPathData[] | null>(
    null,
  );

  useEffect(() => {
    setMapPathList(output);
  }, []);

  return {
    mapPathList,
  };
};

export default useDetailMapPathList;
