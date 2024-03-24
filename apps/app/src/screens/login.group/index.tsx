import { RootStack } from 'src/navigation/RootStack';
import loginMainScreen from './login.main.screen';

const LoginGroup = () => {
  return (
    <RootStack.Group>
      <RootStack.Screen
        component={loginMainScreen.Screen}
        name={loginMainScreen.name}
      />
    </RootStack.Group>
  );
};

export default LoginGroup;
