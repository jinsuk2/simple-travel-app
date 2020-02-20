import { Navigation } from "react-native-navigation";
import { HOME, CALENDAR, TOOLS } from "./screens";
import SplashScreen from 'react-native-splash-screen';
import { registerScreens } from './screenRegister';

// Register Each Screen to the Navigator by Assigning a name
registerScreens();

const mapStack = {
	stack: {
		children: [
			{
				component: {
					name: HOME,
					options: {
						topBar: {
							visible: false,
							title: {
								text: "Map/Home"
							},
							rightButtons: [
								{
									id: 'nav_logout_btn',
									icon: require("../images/image001.jpg")
								}
							]
						}
					}
				},
			}
		],
		options: {
			bottomTab: {
				text: "Home",
				icon: require("../images/image001.jpg")
			}
		}
	}
};

// Calendar View
const calendarStack = {
	stack: {
		children: [
			{
				component: {
					name: CALENDAR,
					options: {
						topBar: {
							visible: true,
							title: {
								text: "Calendar"
							},
							rightButtons: [
								{
									id: "calendar_right_btn",
									text: "RightCalendar",
									color: "black"
								}
							]
						}
					}
				}
			}
		],
		options: {
			bottomTab: {
				text: "Calendar",
				icon: require("../images/image001.jpg")
			}
		}
	}
};

// List of Tools
const toolStack = {
	stack: {
		children: [
			{
				component: {
					name: TOOLS,
					options: {
						topBar: {
							visible: true,
							title: {
								text: "Tools"
							},
							rightButtons: [
								{
									id: "hi_button_id",
									text: "tools"
								}
							]
						}
					}
				}
			}
		],
		options: {
			bottomTab: {
				text: "Tools",
				icon: require("../images/image001.jpg")
			}
		}
	}
};

const bottomTabs = {
	children: [mapStack, calendarStack, toolStack],
	options: {}
};


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

