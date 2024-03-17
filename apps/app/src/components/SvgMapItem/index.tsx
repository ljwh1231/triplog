import { MapType } from '@types';
import { mapUtils } from '@utils';
import { memo } from 'react';
import { ClipPath, Defs, G, Image, Path, PathProps } from 'react-native-svg';

type SvgMapItemProps = MapType.MapPathData & Omit<PathProps, 'd'>;

const SvgMapItem = (props: SvgMapItemProps) => {
  const { path, name, ...pathProps } = props;

  const clipId = 'clip-path-' + Math.random().toString(36).slice(2, 9);

  const { minX, maxX, minY, maxY } = mapUtils.getPathSquareCornerPosition(path);

  const width = Math.max(maxX - minX, maxY - minY);

  return (
    <>
      <Defs>
        <ClipPath id={clipId}>
          <Path d={path} />
        </ClipPath>
      </Defs>
      <G>
        <Path
          d={path}
          fill={'white'}
          stroke={'black'}
          strokeWidth={0.5}
          {...pathProps}
        />
        <Image
          xlinkHref={
            'https://thumb.hypen.im/thumbnail/1q7pk8qw/3/2958/200_200_cover/47mycltmplfgmw39mgqw.jpg'
          }
          x={minX}
          y={minY}
          width={width}
          height={width}
          clipPath={`url(#${clipId})`}
        />
      </G>
    </>
  );
};

export default memo(SvgMapItem);
