import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ScreenTemplateProps = {
  children: React.ReactNode;
  useTopPadding?: boolean;
  useBottomPadding?: boolean;
  NavBar?: React.ReactNode;
};

const ScreenTemplate = (props: ScreenTemplateProps) => {
  const {
    children,
    useTopPadding = true,
    useBottomPadding = true,
    NavBar,
  } = props;

  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          paddingTop: useTopPadding ? top : 0,
          paddingBottom: useBottomPadding ? bottom : 0,
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
    backgroundColor: 'white',
  },
});

export default ScreenTemplate;
