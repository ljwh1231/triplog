import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

export type MapDetailContextData = {
  content: string;
  color: string;
  imageUrl: string;
  date: string;
};

export type MapDetailContextType = {
  detailData: MapDetailContextData;
  setDetailData: (data: Partial<MapDetailContextData>) => void;
} | null;

const DEFAULT_CONTEXT: MapDetailContextData = {
  content: '',
  color: '',
  imageUrl: '',
  date: '',
};

export const MapDetailContext = createContext<MapDetailContextType | null>(
  null,
);

export const useMapDetailContext = () => {
  const context = useContext(MapDetailContext);

  if (!context) {
    throw new Error(
      'useMapDetailContext must be used within a MapDetailContext',
    );
  }

  return context;
};

type MapDetailContextProviderProps = {
  initialContext: Partial<MapDetailContextData>;
} & PropsWithChildren;

export const MapDetailContextProvider = (
  props: MapDetailContextProviderProps,
) => {
  const { children, initialContext } = props;

  const [detailContext, setDetailContext] = useState<MapDetailContextData>({
    ...DEFAULT_CONTEXT,
    ...initialContext,
  });

  const _setDetailContext = useCallback(
    (params: Partial<MapDetailContextData>) => {
      setDetailContext((prev) => ({
        ...prev,
        ...params,
      }));
    },
    [],
  );

  return (
    <MapDetailContext.Provider
      value={{
        detailData: detailContext,
        setDetailData: _setDetailContext,
      }}>
      {children}
    </MapDetailContext.Provider>
  );
};
