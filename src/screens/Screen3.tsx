/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';

export const screen3 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Third screen</Text>
    </View>
  );
};

screen3.options = () => ({
  topBar: {
    visible: true,
    title: {
      text: 'Third Screen'
    },
    rightButtons: [
      {
        id: 'hi_button_id',
        text: 'Third'
      }
    ]
  }
});

export default screen3;
