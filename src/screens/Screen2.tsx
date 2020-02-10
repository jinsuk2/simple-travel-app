/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';

export const screen2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Second Screen!</Text>
    </View>
  );
};

screen2.options = () => ({
  topBar: {
    visible: true,
    title: {
      text: 'Second Screen'
    },
    rightButtons: [
      {
        id: 'hi_button_id',
        text: 'Second'
      }
    ]
  }
});

export default screen2;
