/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, Button } from 'react-native';


export default class Tools extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity style={{ height: 150, width: 120, marginTop: 40, backgroundColor: "#FFFFFF", zIndex: 2 }}></TouchableOpacity>
              <Text style={{ fontSize: 18, marginTop: 10 }}>Currency</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity style={{ height: 150, width: 120, marginTop: 40, backgroundColor: "#FFFFFF", zIndex: 2 }}>
                {/*add react-icons to each button*/}
              </TouchableOpacity>
              <Text style={{ fontSize: 18, marginTop: 10 }}>Journal</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "center" }} >
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity style={{ height: 150, width: 120, marginTop: 40, backgroundColor: "#FFFFFF", zIndex: 2 }}></TouchableOpacity>
              <Text style={{ fontSize: 18, marginTop: 10 }}>Photos</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity style={{ height: 150, width: 120, marginTop: 40, backgroundColor: "#FFFFFF", zIndex: 2 }}></TouchableOpacity>
              <Text style={{ fontSize: 18, marginTop: 10 }}>Todos</Text>
            </View>
          </View>
        </View>
      </View >
    );
  }
}
