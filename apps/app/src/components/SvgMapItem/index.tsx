import { useNavigationService } from '@hooks/navigation';
import { MapType } from '@types';
import { mapUtils } from '@utils';
import { memo } from 'react';
import {
  ClipPath,
  Defs,
  G,
  Image,
  Path,
  PathProps,
  Text,
} from 'react-native-svg';

type SvgMapItemProps = MapType.MapPathData &
  Omit<PathProps, 'd'> & {
    imageUrl?: string;
    useText?: boolean;
    onPress?: () => void;
  };

const SvgMapItem = (props: SvgMapItemProps) => {
  const { path, name, imageUrl, useText = true, onPress, ...pathProps } = props;

  const clipId = 'clip-path-' + Math.random().toString(36).slice(2, 9);

  const { minX, maxX, minY, maxY } = mapUtils.getPathSquareCornerPosition(path);

  const { centerX, centerY } = mapUtils.gePathCenterPosition(path);

  const width = Math.max(maxX - minX, maxY - minY);

  const handlePress = () => {
    return onPress && onPress();
  };

  return (
    <>
      <Defs>
        <ClipPath id={clipId}>
          <Path d={path} />
        </ClipPath>
      </Defs>
      <G onPress={handlePress}>
        <Path
          d={path}
          fill={'white'}
          stroke={'black'}
          strokeWidth={0.5}
          {...pathProps}
        />
        {useText && centerX && centerY && (
          <Text x={centerX - 5} y={centerY + 2} fontSize={6}>
            {name}
          </Text>
        )}
        {imageUrl && (
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
        )}
      </G>
    </>
  );
};

export default memo(SvgMapItem);
