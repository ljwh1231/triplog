import { ImageType } from '@types';
import { useCallback } from 'react';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';

export const useImagePicker = () => {
  const parseImage = (res: ImageOrVideo): ImageType.LocalImage => {
    return {
      sourcePath: res.sourceURL || res.path,
      mime: res.mime,
      width: 'cropRect' in res ? res.cropRect?.width || res.width : res.width,
      height:
        'cropRect' in res ? res.cropRect?.height || res.height : res.height,
    };
  };

  const selectImage = useCallback(
    async (
      params: Omit<
        Parameters<typeof ImagePicker.openPicker>[0],
        'multiple' | 'cropping' | 'freeStyleCropEnabled'
      > &
        (
          | {
              multiple: true;
              onSelect: (imageUrls: ImageType.LocalImage[]) => void;
            }
          | {
              multiple: false;
              onSelect: (imageUrl: ImageType.LocalImage) => void;
            }
        ),
    ) => {
      const { multiple, onSelect, ...props } = params;

      if (multiple) {
        const images = await ImagePicker.openPicker({
          multiple,
          cropping: true,
          freeStyleCropEnabled: true,
          ...props,
        });
        onSelect(images.map(parseImage));
      } else {
        const image = await ImagePicker.openPicker({
          cropping: true,
          freeStyleCropEnabled: true,
          ...props,
        });
        onSelect(parseImage(image));
      }
    },
    [],
  );
  return { selectImage };
};

export default useImagePicker;
