export const gePathCenterPosition = (pathString: string) => {
  const points = pathString.match(/[-+]?\d*\.?\d+/g)?.map(Number);

  if (!points) return { x: 0, y: 0 };
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;

  for (var i = 0; i < points.length; i += 2) {
    var x = points[i];
    var y = points[i + 1];
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }

  var centerX = (minX + maxX) / 2;
  var centerY = (minY + maxY) / 2;

  return { centerX, centerY };
};

export const getPathSquareCornerPosition = (pathString: string) => {
  const points = pathString.match(/[-+]?\d*\.?\d+/g)?.map(Number);

  if (!points)
    return {
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
    };

  const xArray = [];
  const yArray = [];

  for (let i = 0; i < points.length; i += 2) {
    const x = points[i];
    const y = points[i + 1];

    xArray.push(x);
    yArray.push(y);
  }

  const minX = Math.min(...xArray);
  const maxX = Math.max(...xArray);
  const minY = Math.min(...yArray);
  const maxY = Math.max(...yArray);

  return { minX, minY, maxX, maxY };
};

export const getSingleSvgItemStyle = (params: {
  path: string;
  itemWidth: number;
}) => {
  const { path, itemWidth } = params;

  const { minX, maxX, minY, maxY } = getPathSquareCornerPosition(path);

  const originalItemWidth = maxX - minX;
  const originalItemHeight = maxY - minY;

  const ratio = originalItemHeight / originalItemWidth;

  const viewBox = `${minX} ${minY} ${originalItemWidth} ${originalItemHeight}`;

  return {
    viewBox,
    width: itemWidth,
    height: itemWidth * ratio,
  };
};
