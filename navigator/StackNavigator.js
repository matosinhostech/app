import React from "react";
import 'react-native-gesture-handler';
import Home from "../screen/home";
import Events from "../screen/events";
import Partners from "../screen/partners";
import Videos from "../screen/videos";
import Video1 from "../screen/eventVideo/video1"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

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

const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: '', headerShown: true, headerTransparent: true, headerTintColor: Colors.secondary, headerTitleAlign: 'center'}}/>
                <Stack.Screen name="Events" component={Events} options={{title: 'Back', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Partners" component={Partners} options={{title: 'Back', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Videos" component={Videos} options={{title: 'Back', headerShown: true, headerTransparent: true}}/>
                <Stack.Screen name="Video" component={Video1} options={{title: 'Back', headerShown: true, headerTransparent: true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;