import { MapType } from '@repo/global-type';
import { create } from 'zustand';

type SelectedMapStore = {
  selectedMap: MapType.Map | null;
  setSelectedMap: (map: MapType.Map | null) => void;
};

export const useSelectedMapStore = create<SelectedMapStore>((set) => ({
  selectedMap: null,
  setSelectedMap: (map) => set({ selectedMap: map }),
}));
