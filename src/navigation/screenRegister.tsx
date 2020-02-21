import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
    CALENDAR,
    CURRENCY,
    HOME,
    JOURNAL,
    LOGIN,
    PHOTOS,
    TODOS,
    TOOLS,
    SETTINGS
} from "./screenNames";
import {
    Calendar,
    Home,
    Login,
    Photos,
    Tools
} from "../screens";
import {
    Currency,
    Journal,
    Todos,
    Settings
} from "../screens/tools/index"
import { Provider } from '../redux';

function WrappedComponent(Component: any) {
    return function inject(props: any) {
        const EnhancedComponent = (): any => (
            <Provider>
                <Component {...props} />
            </Provider>
        )

        return <EnhancedComponent />;
    }
}

export const registerScreens = () => {
    // Login Stack
    Navigation.registerComponent(LOGIN, () => WrappedComponent(Login));

    // Main Stack
    Navigation.registerComponent(HOME, () => WrappedComponent(Home));
    Navigation.registerComponent(CALENDAR, () => WrappedComponent(Calendar));
    Navigation.registerComponent(PHOTOS, () => WrappedComponent(Photos));
    Navigation.registerComponent(TOOLS, () => WrappedComponent(Tools));

    // Tools Stack
    Navigation.registerComponent(CURRENCY, () => WrappedComponent(Currency));
    Navigation.registerComponent(JOURNAL, () => WrappedComponent(Journal));
    Navigation.registerComponent(TODOS, () => WrappedComponent(Todos));
    Navigation.registerComponent(SETTINGS, () => WrappedComponent(Settings));

    // Calendar Stack
}