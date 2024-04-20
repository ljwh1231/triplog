import NavBar from '@components/NavBar';
import { DEVICE_CONSTANTS } from '@constants';
import { useRef, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DropDown from 'src/global-components/DropDown';

type MyMapListNavBarProps = {
  title: string;
};

const MyMapListNavBar = (props: MyMapListNavBarProps) => {
  const { title } = props;

  const viewRef = useRef<View>(null);

  const { top } = useSafeAreaInsets();

  const [rightElemLayout, setRightElemLayout] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  const handleOnLayout = (e: LayoutChangeEvent) => {
    viewRef.current?.measure((x, y, width, height) => {
      setRightElemLayout({ x, y, width, height });
    });
  };

  const handlePressRight = () => {
    if (rightElemLayout) {
      DropDown.show({
        right:
          DEVICE_CONSTANTS.WIDTH - rightElemLayout.x - rightElemLayout.width,
        top: rightElemLayout.y + top,
        list: [
          {
            text: '수정',
            onPress: () => {
              console.log('수정');
            },
          },
          {
            text: '삭제',
            onPress: () => {
              console.log('삭제');
            },
          },
        ],
      });
    }
  };

  return (
    <NavBar
      title={title}
      leftComponent={<NavBar.Icon iconName="arrowLeft" />}
      rightComponent={
        <View ref={viewRef} onLayout={handleOnLayout}>
          <NavBar.Icon iconName="more" onPress={handlePressRight} />
        </View>
      }
    />
  );
};

export default MyMapListNavBar;
