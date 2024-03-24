import NavBar from '@components/NavBar';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScreenTemplateProps = {
  children: React.ReactNode;
  useTopPadding?: boolean;
  useBottomPadding?: boolean;
  NavBar?: React.ReactNode;
};

const ScreenTemplate = (props: ScreenTemplateProps) => {
  const { children, useTopPadding, useBottomPadding, NavBar } = props;

  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          paddingTop: useBottomPadding ? top : 0,
          paddingBottom: useTopPadding ? bottom : 0,
        },
      ])}>
      {NavBar}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenTemplate;
