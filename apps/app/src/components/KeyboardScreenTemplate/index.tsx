import ScreenTemplate, {
  ScreenTemplateProps,
} from '@components/ScreenTemplate';
import { KeyboardAvoidingView, Platform } from 'react-native';

const KeyboardScreenTemplate = (props: ScreenTemplateProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}>
      <ScreenTemplate {...props} useBottomPadding={false} />
    </KeyboardAvoidingView>
  );
};

export default KeyboardScreenTemplate;
