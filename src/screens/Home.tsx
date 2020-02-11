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
import { clientOptions } from '../globals/mapbox';

const IS_ANDROID = Platform.OS === 'android';

// Mapbox
MapboxGl.setAccessToken(clientOptions.accessToken);
MapboxGl.setConnected(true);

export default class Home extends Component {
  // static propTypes = {
  //   navigation: PropTypes.shape({ navigate: PropTypes.func })
  // };

  constructor(props: any) {
    super(props);

    this.state = {
      isFetchingAndroidPermission: IS_ANDROID,
      isAndroidPermissionGranted: false,
      activeExample: -1,
      zoom: 14
    };
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
        <View style={{ height: 550, width: 412 }}>
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
