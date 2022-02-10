import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState, useRef } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";


const Maps = () => {
  const [mapRegion, setRegion] = useState({
    latitude: 41.16589541103815, 
    longitude: -8.660416801879878,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const selectedMarker = require('../assets/coletiv.png');

  return (
    <>
        <View style={styles.container}>
            <MapView
            style={{ alignSelf: 'stretch', height: '100%' }}
            region={mapRegion}>
                
                <Marker // coletiv
                        coordinate={{ 
                        latitude : 41.16132235902691, 
                        longitude : -8.627314607425252 }}
                        title="Coletiv"
                        pinColor='violet'
                />
                <Marker // basecone
                        coordinate={{ 
                        latitude : 41.15680920857158,  
                        longitude : -8.630009553960608 }}
                        title="Basecone"
                        pinColor='violet'
                />
                <Marker // newwork
                        coordinate={{ 
                        latitude : 41.17819092495354,
                        longitude : -8.678966853960608 }}
                        title="New Work SE"
                        pinColor='violet'
                />
                <Marker // glazed
                        coordinate={{ 
                        latitude : 41.176205249730934,  
                        longitude : -8.686051 }}
                        title="Glazed"
                        pinColor='violet'
                />
            </MapView>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Maps;
