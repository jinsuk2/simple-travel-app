/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import MapboxGl from '@react-native-mapbox-gl/maps';
import { connectData } from '../redux';

const IS_ANDROID = Platform.OS === 'android';

// Mapbox
MapboxGl.setAccessToken("pk.eyJ1Ijoiamluc3Vra2ltOTQiLCJhIjoiY2s2aDFnaG5vMHNhNDNnb2U1ZjE2MHpmciJ9.arU85nmNy8uinvlPyysJWw");
MapboxGl.setConnected(true);

type Props = {

}

type State = {
  isFetchingAndroidPermission: boolean,
  isAndroidPermissionGranted: boolean,
  activeExample: any,
  zoom: number
}

class Home extends React.Component<Props, State> {
  readonly state: State = {
    isFetchingAndroidPermission: IS_ANDROID,
    isAndroidPermissionGranted: false,
    activeExample: -1,
    zoom: 14
  }

  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    if (IS_ANDROID) {
      const isGranted = await MapboxGl.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false
      });
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF'
        }}
      >
        <View style={{ height: 200, width: 412 }}>
          <MapboxGl.MapView
            compassEnabled
            styleURL={'mapbox://styles/mapbox/outdoors-v11'}
            style={{ flex: 1 }}
            userTrackingMode={1}
            zoomEnabled
          >
            <MapboxGl.Camera
              zoomLevel={10}
              centerCoordinate={[49.28273, -123.120735]}
              followUserLocation
              followUserMode={'normal'}
            />
            <MapboxGl.UserLocation />
          </MapboxGl.MapView>
        </View>
      </View>
    );
  }
}

export default connectData()(Home);