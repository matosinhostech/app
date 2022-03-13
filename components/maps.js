import React from "react";
import { StyleSheet, Text, Image, View, Linking } from "react-native";
import { useState, useRef } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

// Contants
import PARTNERS from '../constants/partners';

const Maps = () => {
  const [mapRegion, setRegion] = useState({
    latitude: 41.16589541103815,
    longitude: -8.660416801879878,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: '100%' }}
          region={mapRegion}>
          {PARTNERS.map(({
            slug,
            name,
            address,
            latitude,
            longitude,
            logo,
            site,
          }) => (
            <Marker
              key={slug}
              coordinate={{
                latitude: latitude,
                longitude: longitude
              }}
              title={name}
              pinColor='violet'
              onCalloutPress={() => Linking.openURL(site)}>
              <MapView.Callout>
                <View style={styles.partnerCard}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.address}>{address}</Text>
                  {/* 
                      Something weird happens that makes impossible to use an Image inside a
                      MapView.Callout component, so we wrap it in Text component, it works ¯\_(ツ)_/¯
                      https://github.com/react-native-maps/react-native-maps/issues/2633#issuecomment-524324731
                  */}
                  <Text style={styles.logoContainer}>
                    <Image style={styles.logo} source={logo} />
                  </Text>
                </View>
              </MapView.Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  partnerCard: {
    width: 120,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    margin: 0,
    width: 100,
    height: 60,
    textAlign: 'center',
  },
  logo: {
    width: 60,
    height: 30,
    margin: 0,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  address: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5
  }
});

export default Maps;
