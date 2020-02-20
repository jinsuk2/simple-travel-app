import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Calendar as CalendarView
} from 'react-native-calendars';
import { connectData } from "../redux";

type Props = {
  getUserData: Function,
  data: any
}

type State = {
  user: string,
  test: string
}

class Calendar extends React.Component<Props, State> {

  readonly state: State = {
    user: "",
    test: ""
  }

  getHello = () => {
    const { getUserData } = this.props;

    // For Testing
    const number = Math.random();
    getUserData({ number });
  }

  render() {
    const { data } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 300, width: 410, marginBottom: 10 }}>
          <CalendarView />
        </View>
        <TouchableOpacity onPress={() => {
          this.getHello();
        }
        }>
          <Text>Test {data ? data.user : "nope"}</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

export default connectData()(Calendar);