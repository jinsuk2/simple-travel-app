import { Navigation } from "react-native-navigation";
import { HOME, CALENDAR, TOOLS } from "../globals/screen";
import { Home, Calendar, Tools } from "../screens/index";

// Register Each Screen to the Navigator by Assigning a name
Navigation.registerComponent(HOME, () => Home);
Navigation.registerComponent(CALENDAR, () => Calendar);
Navigation.registerComponent(TOOLS, () => Tools);

const mapStack = {
	stack: {
		children: [
			{
				component: {
					name: HOME,
					options: {
						topBar: {
							visible: true,
							title: {
								text: "Map/Home"
							},
							rightButtons: [
								{
									id: "hi_button_id",
									text: "Home"
								}
							]
						}
					}
				}
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
									id: "hi_button_id",
									text: "Calendar"
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

export { mapStack, calendarStack, toolStack };
