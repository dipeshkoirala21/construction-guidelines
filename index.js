/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';

AppRegistry.registerComponent(
  Platform.OS === 'ios' ? 'guide' : 'naxa.buildchangephilippines',
  () => App,
);
