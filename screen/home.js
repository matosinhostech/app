import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
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
                            <ButtonText>
                                Events
                            </ButtonText>
                        </StyledButton>
                    <StyledButton onPress={() => navigation.navigate('Partners')}>
                            <ButtonText>
                                Partners
                            </ButtonText>
                        </StyledButton>
                        <StyledButton onPress={() => navigation.navigate('Videos')}>
                            <ButtonText>
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
      fontSize: 20,
      paddingBottom: 20,
      textAlign: "center",
      fontWeight: "bold"
    },
  });

export default Home;
