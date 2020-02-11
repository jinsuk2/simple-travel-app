import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import MapboxGL from '@react-native-mapbox-gl/maps';
import { clientOptions } from './globals/mapbox';
import SplashScreen from 'react-native-splash-screen';
import { mapStack, calendarStack, toolStack } from './stacks/stacks';

const bottomTabs = {
  children: [mapStack, calendarStack, toolStack],
  options: {}
};

export const startApp = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: bottomTabs
    }
  });
  SplashScreen.hide();
};
