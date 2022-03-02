import React, {useEffect, useState} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { InnerContainer, PageTitle, StyledFormArea, StyledButton, ButtonText, Line, HomeContainer, Avatar, LeftIcon, Colors, Card } from "../components/style";
import { StatusBar } from "expo-status-bar";
import { list } from "../components/list";

const Events = ({item}) => {

    return ( // <> </> means that all components should be wrapped in a parent element. Its a first-class component
        <> 
            <StatusBar style="dark" />
            <PageTitle>Next Events</PageTitle>
            <InnerContainer>
                <Card>
                    <Text></Text>
                </Card>
                <Card>
                    <Text></Text>
                </Card>
            </InnerContainer>
        </>
    );
}

export default Events;
