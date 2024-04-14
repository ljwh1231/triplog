import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, Platform } from 'react-native';

const defaultKeyboardCoordinates = {
  screenX: 0,
  screenY: 0,
  width: 0,
  height: 0,
} as const;

const useKeyboard = () => {
  const [keyboardCoordinates, setKeyboardCoordinates] = useState<
    KeyboardEvent['endCoordinates']
  >(defaultKeyboardCoordinates);

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const handleKeyboardWillShow = (event: KeyboardEvent) => {
    setKeyboardCoordinates(event.endCoordinates);
    setIsKeyboardVisible(true);
  };
  const handleKeyboardWillHide = () => {
    setKeyboardCoordinates(defaultKeyboardCoordinates);
    setIsKeyboardVisible(false);
  };

  const handleKeyboardDidShow = (event: KeyboardEvent) => {
    setIsKeyboardVisible(true);
    setKeyboardCoordinates(event.endCoordinates);
  };
  const handleKeyboardDidHide = () => {
    setKeyboardCoordinates(defaultKeyboardCoordinates);
    setIsKeyboardVisible(false);
  };

  useEffect(() => {
    const subscriptions =
      Platform.OS === 'ios'
        ? [
            Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow),
            Keyboard.addListener('keyboardWillHide', handleKeyboardWillHide),
          ]
        : [
            Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow),
            Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide),
          ];

    return () => {
      subscriptions.forEach((subscription) => subscription.remove());
    };
  }, []);

  return {
    keyboardCoordinates,
    isKeyboardVisible,
  };
};

export default useKeyboard;
