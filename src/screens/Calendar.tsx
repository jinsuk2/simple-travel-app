import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Calendar as CalendarView,
  CalendarList,
  Agenda
} from 'react-native-calendars';

const config = {
  day: 1, // day of month (1-31)
  month: 1, // month of year (1-12)
  year: 2017, // year
  timestamp: new Date().toISOString(), // UTC timestamp representing 00:00 AM of this date
  dateString: '2016-05-13' // date formatted as 'YYYY-MM-DD' string
};
export default class Calendar extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 550, width: 410 }}>
          <CalendarView />
        </View>
      </View>
    );
  }
}
