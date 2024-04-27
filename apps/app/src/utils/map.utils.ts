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
  detail?: boolean;
}) => {
  const { path, itemWidth } = params;

  const { minX, maxX, minY, maxY } = getPathSquareCornerPosition(path);

  const originalItemWidth = maxX - minX;
  const originalItemHeight = maxY - minY;

  const ratio = originalItemHeight / originalItemWidth;

  return {
    viewBox: getViewBox({
      minX,
      minY,
      maxX,
      maxY,
      isDetail: params.detail,
    }),
    width: itemWidth,
    height: itemWidth * ratio,
  };
};

export const getViewBox = (params: {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  isDetail?: boolean;
}) => {
  const { minX, minY, maxX, maxY, isDetail } = params;

  const originalItemWidth = maxX - minX;
  const originalItemHeight = maxY - minY;

  const adjustmentRatio = isDetail ? 0.05 : 0;

  const widthAdjustment = originalItemWidth * adjustmentRatio;
  const heightAdjustment = originalItemHeight * adjustmentRatio;

  return `${minX - widthAdjustment} ${minY - heightAdjustment} ${
    originalItemWidth + widthAdjustment
  } ${originalItemHeight + heightAdjustment}`;
};
