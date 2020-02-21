import { HOME, CALENDAR, TOOLS, PHOTOS } from "./screenNames";

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

// Photo View
const photoStack = {
    stack: {
        children: [
            {
                component: {
                    name: PHOTOS,
                    options: {
                        topBar: {
                            visible: true,
                            title: {
                                text: "Photos"
                            },
                            rightButtons: [
                                {
                                    id: "hi_button_id",
                                    text: "Photos"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        options: {
            bottomTab: {
                text: "Photos",
                icon: require("../images/image001.jpg")
            }
        }
    }
}

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
    children: [mapStack, calendarStack, photoStack, toolStack],
    options: {}
};

export { mapStack, calendarStack, photoStack, toolStack, bottomTabs }