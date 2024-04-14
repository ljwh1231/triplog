import ScreenTemplate, {
  ScreenTemplateProps,
} from '@components/ScreenTemplate';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const KeyboardScreenTemplate = (props: ScreenTemplateProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <ScreenTemplate {...props} useBottomPadding={false} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardScreenTemplate;
