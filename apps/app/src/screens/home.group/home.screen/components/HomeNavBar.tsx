import NavBar from '@components/NavBar';
import { StyleSheet, Text, View } from 'react-native';

const HomeNavBar = () => {
  const leftComponent = () => {
    return (
      <View>
        <Text>Left</Text>
      </View>
    );
  };

  const rightComponent = () => {
    return (
      <View style={styles.rightComponentContainer}>
        <NavBar.Icon iconName="share" />
        <NavBar.Icon iconName="download" />
      </View>
    );
  };

  return (
    <NavBar rightComponent={rightComponent()} leftComponent={leftComponent()} />
  );
};

const styles = StyleSheet.create({
  rightComponentContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default HomeNavBar;
