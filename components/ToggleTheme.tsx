import React, {useContext} from 'react';
import {ThemeContext, UserContext} from "../utils/context";
import {TouchableNativeFeedback, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ToggleTheme = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <TouchableNativeFeedback
            onPress={() => {
                toggleTheme();
            }}
        >
            <Ionicons name="moon" size={20} color="gray"/>
        </TouchableNativeFeedback>
    );
};

export default ToggleTheme;