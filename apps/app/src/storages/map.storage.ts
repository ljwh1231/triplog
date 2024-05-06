import { MapType } from '@repo/global-type';
import { tripLogStorage } from '@storages';

export const setSelectedMapIdStorage = (id: MapType.Map['id']) =>
  tripLogStorage.set('selectedMapId', id);

export const getSelectedMapIdStorage = () =>
  tripLogStorage.getNumber('selectedMapId');

export const deleteSelectedMapIdStorage = () =>
  tripLogStorage.delete('selectedMapId');
