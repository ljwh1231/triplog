import { useNavigationRoute } from '@hooks/navigation';
import { ScreenType } from '@types';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export type LoginWebviewScreenParams = {
  LoginWebviewScreen: {
    url: string;
  };
};

const LoginWebViewScreen = () => {
  const {
    params: { url },
  } = useNavigationRoute('LoginWebviewScreen');

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default {
  Screen: LoginWebViewScreen,
  name: 'LoginWebviewScreen',
} as ScreenType.ScreenType;
