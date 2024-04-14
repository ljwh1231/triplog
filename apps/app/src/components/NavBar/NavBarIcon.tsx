import SvgIcon from '@components/SvgIcon';
import { SvgIconKey } from '@components/SvgIcon/svgicon.type';
import { useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';

type NavBarIconProps = {
  iconName: SvgIconKey;
  onPress?: () => void;
};

const NavBarIcon = (props: NavBarIconProps) => {
  const { iconName, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <SvgIcon iconName={iconName} size={24} />
    </TouchableOpacity>
  );
};

export default NavBarIcon;
