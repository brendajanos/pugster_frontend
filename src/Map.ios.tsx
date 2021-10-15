import React, {useEffect, FC} from 'react';
import {StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {IProps} from './Map.types';


MapboxGL.setAccessToken(
  'pk.eyJ1IjoicHVnc3RlciIsImEiOiJja3RzdmxydnUxazJmMnVtcG0yMGNma3YyIn0.PgJQ_Tqd4FGeHspfGMOcNQ',
);

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

const Map: FC<IProps> = props => {
  const {initialLng, initialLat, initialZoom, onLocationChange} = props;

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);
  console.log(props);

  return (
    <MapboxGL.MapView style={styles.map}>
      <MapboxGL.Camera
        centerCoordinate={[initialLng, initialLat]}
        zoomLevel={14}
      />
      <MapboxGL.UserLocation visible={true} />
    </MapboxGL.MapView>
  );
};

export default Map;
