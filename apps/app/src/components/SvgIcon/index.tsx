import { SvgXml } from 'react-native-svg';
import * as SvgAssets from './assets';
import { SvgIconKey } from './svgicon.type';
import { View } from 'react-native';

type SvgIconProps = {
  iconName: SvgIconKey;
  size?: number;
  color?: string;
};

const SvgIcon = (props: SvgIconProps) => {
  const { iconName, size, color = '#000000' } = props;

  return (
    <SvgXml
      xml={SvgAssets[iconName]}
      width={size}
      height={size}
      color={color}
    />
  );
};

export default SvgIcon;
