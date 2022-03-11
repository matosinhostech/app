import React, {useEffect, useState} from "react";
import { ImageBackground, SafeAreaView, View, StyleSheet, Text, Image  } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Vimeo } from 'react-native-vimeo-iframe'

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
            

            <View style={styles.container1}/>
             
             
            <SafeAreaView style={styles.container}>

              <View style={styles.mainContainer}>

                <Vimeo
                    videoId={'676381927'}
                    onReady={() => console.log('Video is ready')}
                    onPlay={() => console.log('Video is playing')}
                    onPlayProgress={(data) => console.log('Video progress data:', data)}
                    onFinish={() => console.log('Video is finished')}
                    loop={false}
                    autoPlay={false}
                    controls={true}
                    speed={false}/>

              </View>
              
            </SafeAreaView>
            

            <View style =  
             {{    
                flexDirection: 'row',                
                flex: 0.5,
                width: '88%',
                marginVertical: 50,
                marginHorizontal: 23, 
                padding: 8, 
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
                height: 100,     
                marginTop: -100,                                          
             }}>

        
        <Image 
        style={{ width: 80, height:100, borderRadius: 12,}}
        source={require('../../assets/robertoSousa.png') }/> 
        
        
        <View>
        <Text style={{
                      fontSize: 15, 
                      marginLeft: 10,
                      fontFamily: 'monospace', 
                      width: '10%',
                    }}>How to mix crypto with everyday payments? Roberto Sousa, Head of Engineering at Mode, gives us an insight into how to merge crypto into payments and a breakdown of how to design it to scale and all the challenges associated with it.</Text>
        </View> 

        </View>
        

        </>

        );
    
}

const styles = StyleSheet.create({

    container1: 
    {
      flex: 0,
      justifyContent: 'center',
    },

    container: 
    {
      flex: 1,
    },

    mainContainer: 
    {
      flex: 1,
      justifyContent: 'space-between',
      paddingVertical: 170,
      paddingTop: 150,
      marginBottom: 10,
      width: '90%',
      marginLeft: 19,
    },
})

export default Video1; 