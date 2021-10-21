import React, {useMemo, useRef, useCallback} from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView} from 'react-native';
import Map from '../Map';
import {useQueryClient} from 'react-query';
import BottomSheet from '@gorhom/bottom-sheet';
import PugLogo from '../images/PugLogo.png';

function getChunkId(lng: number, lat: number) {
  let chunkLng = Math.floor(lng);
  let chunkLat = Math.floor(lat);
  return {lng: chunkLng, lat: chunkLat};
}

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
  },
  container: {
    left: 0,
    right: 0,
    position: 'absolute',
    top: 0,
    margin: 10,
  },
  map: {
    display: 'flex',
    flex: 1,
  },
  topNav: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  texts: {
    justifyContent: 'center',
    marginRight: 8,
  },
  nameText: {
    fontFamily: 'Kalam',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
  },
  detailsText: {
    fontFamily: 'Kalam',
    fontSize: 14,
    textAlign: 'right',
  },
  branding: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandingText: {
    fontWeight: 'bold',
    fontFamily: 'Kalam',
    fontSize: 18,
    marginLeft: 8,
  },
});

const HomeScreen = () => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const sheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const client = useQueryClient();
  return (
    <View style={styles.screen}>
      <View style={styles.map}>
        <Map
          initialLng={19.040528307070645}
          initialLat={47.50637626996388}
          initialZoom={16}
          onLocationChange={(lng, lat, _zoom) => {
            const {lng: chunkLng, lat: chunkLat} = getChunkId(lng, lat);
            client.fetchQuery(['chunk', chunkLng, chunkLat], () => {
              console.log(`loading chunk: ${chunkLng} ${chunkLat}`);
              return {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    geometry: {
                      type: 'Point',
                      coordinates: [19.040528307070645, 47.50637626996388],
                    },
                    properties: {
                      name: 'Luigi',
                      imageSrc: 'something',
                    },
                  },
                ],
              };
            });
          }}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.topNav}>
          <Branding />
          <Avatar />
        </View>
      </SafeAreaView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View>
          <Text>Awesome gecc 🔥</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const Avatar = () => {
  return (
    <View style={styles.avatarContainer}>
      <View style={styles.texts}>
        <Text style={styles.nameText}>Luigi</Text>
        <Text style={styles.detailsText}>Veteran</Text>
      </View>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1605366873371-6b8e5012c96e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=44&q=100',
        }}
        style={styles.avatar}
      />
    </View>
  );
};

const Branding = () => {
  return (
    <View style={styles.branding}>
      <Image source={PugLogo} />
      <Text style={styles.brandingText}>Pugster</Text>
    </View>
  );
};

export default HomeScreen;
