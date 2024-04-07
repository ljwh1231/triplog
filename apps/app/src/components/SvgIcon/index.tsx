import { SvgXml } from 'react-native-svg';
import * as SvgAssets from './assets';
import { SvgIconKey } from './svgicon.type';

type SvgIconProps = {
  iconName: SvgIconKey;
  size?: number;
};

const SvgIcon = (props: SvgIconProps) => {
  const { iconName, size } = props;

  return <SvgXml xml={SvgAssets[iconName]} width={size} height={size} />;
};

export default SvgIcon;
