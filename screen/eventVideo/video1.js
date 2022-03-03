import React, {useEffect, useState} from "react";
import { ImageBackground, View, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import Video from 'react-native-video';

const image = { uri: "https://st3.idealista.pt/news/arquivos/2020-07/pedro-menezes-zevlhievs5a-unsplash.jpg?sv=hKKKA3h4" };

/// https://player.vimeo.com/video/676381927?h=9901e6196c

const Video1 = () => {

    return ( 
        <> 
            <StatusBar style="dark" />

            <ImageBackground 
            source={image} 
            resizeMode='cover' 
            style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.8}}
            blurRadius={4}
            />

            <View>
            
            <Video
            source={{ url: 'https://player.vimeo.com/video/676381927?h=9901e6196c' }}
            controls={true} 
            paused={true}                 
            style={styles.backgroundVideo}  
            repeat={false}
            />
            
            </View>



        </>

    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingTop: 70,
      marginVertical: 8,
      marginHorizontal: 0,
    },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 300, 
        height: 300
    }

  });

export default Video1;

