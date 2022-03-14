import React, {useEffect, useState} from "react";
import { ImageBackground, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from "react-native";
import { InnerContainer, PageTitle, StyledFormArea, StyledButton, ButtonText, Line, HomeContainer, Avatar, LeftIcon, Colors } from "../components/style";
import { StatusBar } from "expo-status-bar";
import { list } from "../components/list";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const image = { uri: "https://st3.idealista.pt/news/arquivos/2020-07/pedro-menezes-zevlhievs5a-unsplash.jpg?sv=hKKKA3h4" };


const Videos = ({navigation}) => {

    return (<> 
                       
            <StatusBar style="dark" />

            <ImageBackground 
                source={image} 
                resizeMode='cover' 
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.8}}
                blurRadius={4}/>
            

            <View style={styles.container}>


              <FlatList
     
                contentContainerStyle=
                {{padding: 20, paddingTop: StatusBar.currentHeight || 60}}  
                
                data={list}
 
                renderItem=
                
                {

                ({item}) => 
                
                {

                return  <TouchableOpacity onPress={() => {navigation.navigate('Video', {item})}}>
                        
                    <View style = 
                    
                    {{
                      flexDirection: 'row', 
                      padding: 17, 
                      marginBottom: 20,       
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      borderRadius: 12, 
                      shadowColor: "#000", 
                      shadowOffset: {
                      width: 0, 
                      height: 10},
                      shadowOpacity: .3, 
                      shadowRadius:20,
                      elevation: 20,
                      backgroundColor: '#fff',
                      opacity: 0.87,
                      paddingTop: 7,
                      height: 120,                                                
                    }}>
                                         
                                                                     
                    <View>

                    <Text style={{fontSize: 21, fontWeight: '700', fontFamily: 'monospace'}}>{item.title}</Text>

                    <Text style={{fontSize: 17, opacity: 0.7, color:'red', fontFamily: 'monospace'}}>{item.author}</Text>    
                        
                    <Text style={{fontSize: 15, opacity: 0.6, paddingTop: 10, fontFamily: 'monospace', height: 60}}>{item.date}</Text>
                        
                    <Text style=

                    {{
                      flexDirection: 'row', 
                      borderRadius: 12, 
                      backgroundColor: 'red',
                      opacity: 0.9,
                      paddingTop: 3,
                      paddingBottom: 0,
                      paddingLeft: 7,
                      height: 25,
                      width: 53,                                               
                      marginLeft: 272,
                      color: 'white', 
                      fontSize: 13,  
                      fontWeight: 'bold', 
                      marginVertical: -32,
                      fontFamily: 'monospace',    
                    }}
                    >{item.lenght}</Text>        
                      

                    </View>

                    </View> 

                    </TouchableOpacity> 

                }
                
                } 

                /> 

            </View>  

            </>   

          );    

}

const styles = StyleSheet.create({

    container: 
    {
      flex: 1,
      width: '100%',
      paddingTop: 70,
      marginVertical: 8,
      marginHorizontal: 0,
    },
    
  });

export default Videos;