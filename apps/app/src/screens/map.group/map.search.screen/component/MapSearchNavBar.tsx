import NavBar from '@components/NavBar';
import { useNavigationService } from '@hooks/navigation';
import { StyleSheet, Text, View } from 'react-native';

const MapSearchNavBar = () => {
  const { goBack } = useNavigationService();

  return (
    <NavBar
      title="여행 기록하기"
      leftComponent={<NavBar.Icon iconName="arrowLeft" onPress={goBack} />}
    />
  );
};

export default MapSearchNavBar;
