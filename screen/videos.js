import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { InnerContainer, PageTitle, StyledFormArea, StyledButton, ButtonText, Line, HomeContainer, Avatar, LeftIcon, Colors } from "../components/style";
import { StatusBar } from "expo-status-bar";
import { list } from "../components/list";

const Videos = ({item}) => {

    return ( // <> </> means that all components should be wrapped in a parent element. Its a first-class component
        <> 
            <StatusBar style="dark" />
            <View style={styles.container}>
            <FlatList
                    data={list}
                    keyExtractor={item => item.author}
                    renderItem={({item, index}) => {

                        return  <TouchableOpacity>
                        
                        <View style = {{flexDirection: 'row', padding: 25, marginBottom: 7 }}>

                        <View>

                        <Text style={{fontSize: 22, fontWeight: '700'}}>{item.title}</Text>
                        <Text style={{fontSize: 18, opacity: 0.7}}>{item.author}</Text>

                        </View>

                        </View> 

                        </TouchableOpacity>
                    }}
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
      marginHorizontal: 16,
    },
  });

export default Videos;
