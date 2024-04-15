import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CommonPopup from 'src/global-components/CommonPopup';
import DropDown from 'src/global-components/DropDown';
import RootNavigation from 'src/navigation/RootNavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation />
          <DropDown.Portal />
          <CommonPopup.Portal />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
