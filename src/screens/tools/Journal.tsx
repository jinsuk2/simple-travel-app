/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Navigation } from "react-native-navigation";
import {
    View,
    Text
} from "react-native";
import { connectData } from "../../redux";

type Props = {
    getUserData: Function
}

type State = {
    currencyFrom: string,
    currencyTo: string,
    amount: number
}

class Journal extends React.Component<Props, State> {
    readonly state: State = {
        currencyFrom: "",
        currencyTo: "",
        amount: 0
    }

    constructor(props: Props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    getHello = () => {
        const { getUserData } = this.props;

        // For Testing
        const number = Math.random();
        getUserData({ number });
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Jounal!</Text>
            </View>
        );
    }
}

export default connectData()(Journal);