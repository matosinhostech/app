import React, {useEffect, useState} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { InnerContainer, PageTitle, StyledFormArea, StyledButton, ButtonText, Line, HomeContainer, Avatar, LeftIcon, Colors } from "../components/style";
import { StatusBar } from "expo-status-bar";
import { list } from "../components/list";

const Events = ({item}) => {

    return ( // <> </> means that all components should be wrapped in a parent element. Its a first-class component
        <> 
            <StatusBar style="dark" />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 100,
      paddingTop: 70,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });

export default Events;
