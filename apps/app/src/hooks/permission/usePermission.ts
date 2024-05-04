import { request, check } from 'react-native-permissions';
import * as PermissionActions from './permission.constant';
import { Linking } from 'react-native';

type PermissionKey = keyof typeof PermissionActions;

const usePermission = () => {
  const requestPermission = async (params: {
    permissionKey: PermissionKey;
    onGranted?: () => void;
    onDenied?: () => void;
  }) => {
    const { permissionKey, onGranted, onDenied } = params;
    const result = await request(PermissionActions[permissionKey]);

    if (result === 'granted') {
      onGranted && onGranted();
    }

    if (result === 'denied' || result === 'blocked') {
      onDenied && onDenied();
      Linking.openSettings();
    }
  };

  const hasPermission = (key: PermissionKey) => {
    return check(PermissionActions[key]);
  };

  return {
    requestPermission,
    hasPermission,
  };
};

export default usePermission;
