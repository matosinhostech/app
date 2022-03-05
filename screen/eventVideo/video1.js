import React, {useEffect, useState} from "react";
import { ImageBackground, View, Button, StyleSheet,Text  } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Video } from 'expo-av';


const image = { uri: "https://st3.idealista.pt/news/arquivos/2020-07/pedro-menezes-zevlhievs5a-unsplash.jpg?sv=hKKKA3h4" };


const Video1 = () => {


    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    return (<>
         

            <StatusBar style="dark" />


            <ImageBackground 
                source={image} 
                resizeMode='cover' 
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.8}}
                blurRadius={4}/>
            

            <View style={styles.container1}>


            <Video
                ref={video}
                source={{url: "https://player.vimeo.com/video/676381927?h=9901e6196c"}}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}/>
            

            <View style={styles.buttons}>


            <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}/> 
            

            </View>

            </View>


             
            <View style =  
             {{                    
                flex: 1,
                width: '88%',
                paddingTop: 70,
                marginVertical: 0,
                marginHorizontal: 23, 
                padding: 17, 
                marginBottom: 70,       
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                borderRadius: 12, 
                shadowColor: "#000", 
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: .3, 
                shadowRadius:20,
                elevation: 20,
                backgroundColor: '#fff',
                opacity: 0.87,
                paddingTop: 7,
                height: 50,                                                
             }}>


        <View>
        <Text style={{fontSize: 15, paddingTop: 10, fontFamily: 'monospace', height: 60}}>dddd</Text>
        </View> 


        </View>

        </>

        );
    
}

const styles = StyleSheet.create({

    container1: 
    {
      flex: 1,
      justifyContent: 'center',
    },

    video: 
    {
      alignSelf: 'center',
      width: 320,
      height: 200,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },

    buttons: 
    {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

})

export default Video1;