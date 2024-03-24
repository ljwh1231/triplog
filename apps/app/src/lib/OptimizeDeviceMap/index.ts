import { DEVICE_CONSTANTS } from '@constants';
import { GeoJSON2SVG } from 'geojson2svg';
const originalMapJson = require('../../../assets/map.json/detail.json');

class OptimizeDeviceMap {
  static mapData: { path: string; name: string }[] = [];

  constructor() {
    this.makeOptimizeDeviceMap();
  }

  private makeOptimizeDeviceMap() {
    const converter = new GeoJSON2SVG({
      output: 'path',
      viewportSize: {
        width: DEVICE_CONSTANTS.WIDTH,
        height: DEVICE_CONSTANTS.WIDTH,
      },
      r: DEVICE_CONSTANTS.WIDTH,
    });

    const svgList = converter.convert(originalMapJson);

    const withTitleSvgList = svgList.map((svg, index) => {
      return {
        path: svg,
        name: originalMapJson.features[index].properties.SIG_KOR_NM as string,
      };
    });

    OptimizeDeviceMap.mapData = withTitleSvgList;
  }

  public getMapData() {
    return OptimizeDeviceMap.mapData;
  }

  public getMapPathByName(name: string) {
    return OptimizeDeviceMap.mapData.find((data) => data.name === name);
  }
}

export default new OptimizeDeviceMap();
