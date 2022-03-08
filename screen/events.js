import React, {useEffect, useState} from "react";
import { Button, StyleSheet, Text, View,  ImageBackground, TouchableWithoutFeedback, Keyboard} from "react-native";
import { InnerContainer, StyledPopUp, PopUpText, StyledButtonEvent, ButtonTextEvent, Colors, Card } from "../components/style";
import { StatusBar } from "expo-status-bar";
import { Input, Icon } from 'react-native-elements';
import Modal from "react-native-modal";

const Events = ({item}) => {

  const image = { uri: "https://st3.idealista.pt/news/arquivos/2020-07/pedro-menezes-zevlhievs5a-unsplash.jpg?sv=hKKKA3h4" };

  const [alertModal, setAlertModal] = useState(false);

  const handleModal = () => setAlertModal(() => !alertModal); // Pressing the button will call handleModal and return the opposite state.

    return ( // <> </> means that all components should be wrapped in a parent element. Its a first-class component
        <> 
            <StatusBar style="dark" />
            <ImageBackground 
            source={image} 
            resizeMode='cover' 
            style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.8}}
            blurRadius={4}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <InnerContainer>
              <Card>
                <Text style={styles.title}>Subscribe to our news and next events!</Text>
                <Input style={{marginTop: 20, color: Colors.tertiary}}
                  placeholder='example@matosinhos.tech'
                  leftIcon={
                    <Icon style={{marginTop: 20, marginRight: 5}}
                      name='markunread'
                      size={24}
                      color='black'
                    />
                  }
                />
                <StyledButtonEvent onPress={handleModal}> 
                  <ButtonTextEvent style={{fontFamily: 'monospace'}}>
                    Notify Me
                  </ButtonTextEvent>
                  <Modal isVisible={alertModal} onBackdropPress={() => setAlertModal(false)}>
                  <View style={{  
                                                    borderRadius: 30,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    height: '30%', 
                                                    backgroundColor: Colors.secondary}}>
                                        <Text style={{fontFamily: 'monospace', textAlign: "center", paddingBottom: 20, fontSize: 15}}>Your email was added to our list! You will receive a notification soon.</Text>
                                        <Button title="Dismiss" onPress={handleModal} color={Colors.darkslategrey} />
                                    </View>
                  </Modal>
                </StyledButtonEvent>
              </Card>
            </InnerContainer>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.tertiary,
    fontSize: 18,
    paddingTop: 25,
    paddingBottom: 45,
    paddingLeft: 42,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: 'monospace',
    width: 300,
    opacity: 1,
  },
});


export default Events;
