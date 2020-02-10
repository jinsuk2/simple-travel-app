/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';

export const screen1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>First Screen!</Text>
    </View>
  );
};

screen1.options = () => ({
  topBar: {
    visible: true,
    title: {
      text: 'First Screen'
    },
    rightButtons: [
      {
        id: 'hi_button_id',
        text: 'First'
      }
    ]
  }
});

export default screen1;
