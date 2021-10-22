import React, {useEffect, FC} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {IProps, IMarkerProps} from './Map.types';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoicHVnc3RlciIsImEiOiJja3RzdmxydnUxazJmMnVtcG0yMGNma3YyIn0.PgJQ_Tqd4FGeHspfGMOcNQ',
);

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export const Marker: FC<IMarkerProps> = ({coordinate, children}) => {
  return (
    <MapboxGL.MarkerView id="Puglet" coordinate={coordinate}>
      {children}
    </MapboxGL.MarkerView>
  );
};

const Map: FC<IProps> = props => {
  const {initialLng, initialLat, initialZoom, onLocationChange, children} = props;

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  return (
    <MapboxGL.MapView style={styles.map}>
      <MapboxGL.Camera
        centerCoordinate={[initialLng, initialLat]}
        zoomLevel={initialZoom}
      />
      <MapboxGL.UserLocation visible={true} />
      {children}
    </MapboxGL.MapView>
  );
};

export default Map;
