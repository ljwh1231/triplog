import { KeyboardAvoidingView, Platform } from 'react-native';

type KeyboardScreenTemplateProps = {
  children: React.ReactNode;
};

const KeyboardScreenTemplate = (props: KeyboardScreenTemplateProps) => {
  const { children } = props;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardScreenTemplate;
