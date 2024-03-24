import { StyleSheet, Text, View } from 'react-native';
import NavBarIcon from './NavBarIcon';
import NavBarTitle from './NavBarTitle';

type NavBarProps = {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  title?: string;
};

const NavBar = (props: NavBarProps) => {
  const { leftComponent, rightComponent, title } = props;

  return (
    <View style={styles.container}>
      {leftComponent}
      {title && <NavBarTitle title={title} />}
      {rightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

NavBar.Icon = NavBarIcon;
NavBar.Title = NavBarTitle;

export default NavBar;
