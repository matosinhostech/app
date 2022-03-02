import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { InnerContainer, PageTitle, StyledFormArea, StyledButton, ButtonText, Line, HomeContainer, Avatar, LeftIcon, Colors } from "../components/style";
import { StatusBar } from "expo-status-bar";

const image = { uri: "https://st3.idealista.pt/news/arquivos/2020-07/pedro-menezes-zevlhievs5a-unsplash.jpg?sv=hKKKA3h4" };

const Home = ({navigation}) => {

    return ( // <> </> means that all components should be wrapped in a parent element. Its a first-class component
        <> 
            <StatusBar style="dark" />
            <InnerContainer>
                <ImageBackground source={image} resizeMode="cover" style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.8}}/>
                <HomeContainer>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={ require('../assets/transferir.png') } />
                        <Text style={styles.title}>matosinhos.tech</Text>
                        <StyledButton onPress={() => navigation.navigate('Events')}>
                            <ButtonText style={{fontFamily: 'monospace'}}>
                                Events
                            </ButtonText>
                        </StyledButton>
                    <StyledButton onPress={() => navigation.navigate('Partners')}>
                            <ButtonText style={{fontFamily: 'monospace'}}>
                                Partners
                            </ButtonText>
                        </StyledButton>
                        <StyledButton onPress={() => navigation.navigate('Videos')}>
                            <ButtonText style={{fontFamily: 'monospace'}}>
                                Videos
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </HomeContainer>
            </InnerContainer>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
      color: Colors.secondary,
      fontSize: 30,
      paddingBottom: 25,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: 'monospace',
      width: 300,
      opacity: 1,
      marginLeft: -62
    },
  });

export default Home;
