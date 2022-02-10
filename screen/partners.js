import React from "react";
import Maps from "../components/maps";
import { StatusBar } from "expo-status-bar";


const Partners = () => {

    return ( // <> </> means that all components should be wrapped in a parent element. Its a first-class component
        <> 
            <StatusBar style="dark" />
            <Maps />
        </>
    );
}


export default Partners;
