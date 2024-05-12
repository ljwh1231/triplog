export type Map = {
  id: number;
  createdAt: Date;
  name: string;
}

export type MapList = {
  maps: Map[];
}

export type CreateMapRecord = {
  region: string;
  dataType: 'photo' | 'color';
  data: string | PhotoRecord;
  tripStartDate: Date;
  tripEndDate: Date;
  tripMemo: string;
}

export type PhotoRecord = {
  list: string[];
  shape: PhotoShape;

}

export type PhotoShape = {
  xpos: number;
  ypos: number;
  scale: number;
  rotate: number;
}
