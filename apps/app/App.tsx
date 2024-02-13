import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from 'src/navigation/RootNavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
