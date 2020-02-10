import { Navigation, LayoutStack } from 'react-native-navigation';
import { Screen1, Screen2, Screen3 } from './screens';
import { SCREEN1, SCREEN2, SCREEN3 } from './globals/screen';

// Register Each Screen to the Navigator by Assigning a name
Navigation.registerComponent(SCREEN1, () => Screen1);
Navigation.registerComponent(SCREEN2, () => Screen2);
Navigation.registerComponent(SCREEN3, () => Screen3);

const firstStack = {
  stack: {
    children: [
      {
        component: {
          name: SCREEN1
        }
      }
    ],
    options: {
      bottomTab: {
        text: 'First',
        icon: require('./images/image001.jpg')
      }
    }
  }
};

const secondStack = {
  stack: {
    children: [
      {
        component: {
          name: SCREEN2
        }
      }
    ],
    options: {
      bottomTab: {
        text: 'Second',
        icon: require('./images/image001.jpg')
      }
    }
  }
};

const thirdStack = {
  stack: {
    children: [
      {
        component: {
          name: SCREEN3
        }
      }
    ],
    options: {
      bottomTab: {
        text: 'Third',
        icon: require('./images/image001.jpg')
      }
    }
  }
};

const bottomTabs = {
  children: [firstStack, secondStack, thirdStack],
  options: {}
};

export const startApp = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: bottomTabs
    }
  });
};
