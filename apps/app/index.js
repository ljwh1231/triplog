/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'core-js/stable/atob';

AppRegistry.registerComponent(appName, () => App);
