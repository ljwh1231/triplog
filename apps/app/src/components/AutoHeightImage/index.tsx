import FastImage, { FastImageProps } from 'react-native-fast-image';

import * as allLocalImage from './assets';
import { useState } from 'react';

type ImageProps = Omit<FastImageProps, 'source'> & {
  width: number;
} & (
    | {
        useLocal?: true;
        image: keyof typeof allLocalImage;
      }
    | {
        useLocal: false;
        image: string;
      }
  );

const AutoHeightImage = (props: ImageProps) => {
  const { useLocal, image, width, ...fastImageProps } = props;

  const [height, setHeight] = useState(0);

  const imageSource = useLocal ? allLocalImage[image] : { uri: image };

  return (
    <FastImage
      source={imageSource}
      style={{
        width,
        height,
      }}
      onLoad={(event) => {
        setHeight((event.nativeEvent.height / event.nativeEvent.width) * width);
      }}
      {...fastImageProps}
    />
  );
};

export default AutoHeightImage;
