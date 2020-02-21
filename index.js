/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import startApp from "./src/navigation/mainNavigation"

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});