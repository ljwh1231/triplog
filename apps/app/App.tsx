import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddMapPopup from 'src/global-components/AddMapPopup';
import ColorPickerBottomSheet from 'src/global-components/ColorPickerBottomSheet';
import CommonPopup from 'src/global-components/CommonPopup';
import DropDown from 'src/global-components/DropDown';
import InputPopup from 'src/global-components/InputPopup';
import SelectMapBottomSheet from 'src/global-components/SelectMapBottomSheet';
import Toast from 'src/global-components/Toast';
import RootNavigation from 'src/navigation/RootNavigation';
import QueryProvider from 'src/react-query/react-query';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigation />
            <ColorPickerBottomSheet.Portal />
            <SelectMapBottomSheet.Portal />
            <AddMapPopup.Portal />
            <InputPopup.Portal />
            <DropDown.Portal />
            <CommonPopup.Portal />
            <Toast.Portal />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryProvider>
    </GestureHandlerRootView>
  );
};

export default App;
