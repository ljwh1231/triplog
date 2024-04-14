import { MapDetailScreenParams } from './map.detail.screen';
import { MapListScreenParams } from './map.list.screen';
import { MapSearchScreenParams } from './map.search.screen';

export type MapGroupParams = MapDetailScreenParams &
  MapListScreenParams &
  MapSearchScreenParams;
