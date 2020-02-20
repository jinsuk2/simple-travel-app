import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
    HOME,
    CALENDAR,
    TOOLS
} from "./screens";

import {
    Home,
    Calendar,
    Tools
} from "../screens"
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
    Navigation.registerComponent(HOME, () => WrappedComponent(Home));
    Navigation.registerComponent(CALENDAR, () => WrappedComponent(Calendar));
    Navigation.registerComponent(TOOLS, () => WrappedComponent(Tools));
}