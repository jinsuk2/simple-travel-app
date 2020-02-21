/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import { Navigation } from "react-native-navigation";
import { connectData } from "../redux";
import { CURRENCY, JOURNAL, SETTINGS, TODOS, handlePushPop } from "../navigation";

type Props = {
	getUserData: Function,
	componentId: string
}

type State = {
	something: string;
}

class Tools extends React.Component<Props, State> {

	readonly state: State = {
		something: ""
	}
	constructor(props: Props) {
		super(props);
		Navigation.events().bindComponent(this);
	}

	navigateToScreen(name: string, title: string) {
		const { componentId } = this.props;
		const payload = handlePushPop(name, "prop", title);
		Navigation.push(componentId, payload);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1, flexDirection: "row" }}>
					<View style={{ flex: 1, alignItems: "center" }}>
						<View style={{ flex: 1, alignItems: "center" }}>
							<TouchableOpacity
								style={{
									height: 150,
									width: 120,
									marginTop: 40,
									backgroundColor: "#FFFFFF",
									zIndex: 2
								}}
								onPress={() => { this.navigateToScreen(CURRENCY, "Currency") }}
							></TouchableOpacity>
							<Text style={{ fontSize: 18, marginTop: 10 }}>Currency</Text>
						</View>
						<View style={{ flex: 1, alignItems: "center" }}>
							<TouchableOpacity
								style={{
									height: 150,
									width: 120,
									marginTop: 40,
									backgroundColor: "#FFFFFF",
									zIndex: 2
								}}
								onPress={() => { this.navigateToScreen(JOURNAL, "Journal") }}
							>
								{/*add react-icons to each button*/}
							</TouchableOpacity>
							<Text style={{ fontSize: 18, marginTop: 10 }}>Journal</Text>
						</View>
					</View>
					<View style={{ flex: 1, alignItems: "center" }}>
						<View style={{ flex: 1, alignItems: "center" }}>
							<TouchableOpacity
								style={{
									height: 150,
									width: 120,
									marginTop: 40,
									backgroundColor: "#FFFFFF",
									zIndex: 2
								}}
								onPress={() => { this.navigateToScreen(TODOS, "Todos") }}
							></TouchableOpacity>
							<Text style={{ fontSize: 18, marginTop: 10 }}>Todos</Text>
						</View>
						<View style={{ flex: 1, alignItems: "center" }}>
							<View style={{ flex: 1, alignItems: "center" }}>
								<TouchableOpacity
									style={{
										height: 150,
										width: 120,
										marginTop: 40,
										backgroundColor: "#FFFFFF",
										zIndex: 2
									}}
									onPress={() => { this.navigateToScreen(SETTINGS, "Settings") }}
								></TouchableOpacity>
								<Text style={{ fontSize: 18, marginTop: 10 }}>Settings</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default connectData()(Tools);