import { Navigation } from "react-native-navigation";
import SplashScreen from 'react-native-splash-screen';
import { registerScreens } from './screenRegister';
import { bottomTabs } from "./mainStacks";
// Register Each Screen to the Navigator by Assigning a name
registerScreens();

export default function () {
	Navigation.setDefaultOptions({
		topBar: {
			background: {
				color: '#039893'
			},
			title: {
				color: 'white',
			},
			backButton: {
				title: '', // Remove previous screen name from back button
				color: 'white'
			}
		},
		statusBar: {
			style: 'light'
		},
		layout: {
			orientation: ['portrait']
		},
		bottomTabs: {
			titleDisplayMode: 'alwaysShow'
		},
		bottomTab: {
			textColor: 'gray',
			selectedTextColor: 'black',
			iconColor: 'gray',
			selectedIconColor: 'black',
		}
	});
	Navigation.setRoot({
		root: {
			bottomTabs: bottomTabs
		}
	});
	SplashScreen.hide();
}

