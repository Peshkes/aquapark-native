import React, {useContext} from 'react';
import {TextInput} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {ThemeContext} from "../utils/context";

const ThemedInput = (props: any) => {
    const {theme} = useContext(ThemeContext);
    return (
        <TextInput style={globalStyles[`${theme}Input`]} {...props}></TextInput>
    );
};

export default ThemedInput;