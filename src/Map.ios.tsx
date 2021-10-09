import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoicHVnc3RlciIsImEiOiJja3RzdmxydnUxazJmMnVtcG0yMGNma3YyIn0.PgJQ_Tqd4FGeHspfGMOcNQ',
);

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

const Map = () => {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  return <MapboxGL.MapView style={styles.map} />;
};

export default Map;
