const fs = require('fs');
const { GeoJSON2SVG } = require('geojson2svg');
const path = require('path');

const template = (path) => `
    const test = ${JSON.stringify(path)};
    
    export default test;
`;

(() => {
  const converter = new GeoJSON2SVG({
    output: 'path',
    viewportSize: { width: 1000, height: 1000 },
    r: 1000,
  });

  try {
    const jsonFilePath = path.join(
      __dirname,
      '..',
      'assets',
      'map.json',
      'detail.json',
    );

    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

    const svgList = converter.convert(jsonData, {
      output: 'path',
      viewportSize: { width: 1000, height: 1000 },
      r: 1000,
    });

    const withTitleSvgList = svgList.map((svg, index) => {
      return {
        path: svg,
        name: jsonData.features[index].properties.SIG_KOR_NM,
      };
    });

    const outputFilePath = path.join(
      __dirname,
      '..',
      'assets',
      'map.path',
      'output.ts',
    );

    fs.writeFileSync(outputFilePath, template(withTitleSvgList), 'utf-8');
    console.info('PATH 파일이 성공적으로 생성되었습니다.');
  } catch (error) {
    console.error('PATH 파일 생성 중 오류가 발생하였습니다:', error);
  }
})();
