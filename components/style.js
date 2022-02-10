import styled from "styled-components";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444", 
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

// created component as a View and its the container itself
export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const HomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center; 
`;

export const PageLogo = styled.Image`
    width: 400px;
    height: 300px;
    border-radius: 50px;
    margin-bottom: 30px;

`;

export const Avatar = styled.Image`
    width: 120px;
    height: 120px;
    margin: auto;
    margin-bottom: 15px;
    margin-top: 30px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${tertiary};
    padding: 20px;
    margin-top: 40px;

    ${(props) => props.home && `
        font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};

    ${(props) => props.home && `
        font-weight: normal;
        margin-bottom: 5px;
    `}
`;

export const StyledFormArea = styled.View`
    width: 50%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding-bottom: 5px;
    background-color: ${primary};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-vertical: 20px;
    height: 60px;
    border-width: 2px;
    border-color: ${secondary};
    opacity: 0.8;
`;

export const ButtonText = styled.Text`
    color: ${tertiary};
    font-size: 23px;
    font-weight: bold;

`;

export const StyledPopUp = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${primary};
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: ${brand};
    margin-vertical: 10px;
    height: 60px;
`;

export const PopUpText = styled.Text`
    color: ${tertiary};
    font-size: 16px;

`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const Card = styled.View`
    border-radius: 6px;
    elevation: 3;
    background-color: ${primary};
    shadow-offset: {width: 1px, height: 1px};
    shadow-color: #333;
    shadow-opacity: 0.3;
    shadow-radius: 2px;
    margin-horizontal: 4px;
    margin-vertical: 6px;
`;

export const CardContent = styled.View`
        

    ${(props) => props.children && `
        margin-horizontal: 18px;
        margin-vertical: 10px;
    `}
`;



