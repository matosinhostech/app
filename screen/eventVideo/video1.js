import React, {useEffect, useState} from "react";
import { ImageBackground, VideoPlayer, iframe, View } from "react-native";
import { StatusBar } from "expo-status-bar";


const image = { uri: "https://st3.idealista.pt/news/arquivos/2020-07/pedro-menezes-zevlhievs5a-unsplash.jpg?sv=hKKKA3h4" };

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

        </>

    );
    
}

export default Video1;

