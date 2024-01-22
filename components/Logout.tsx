import React, {useContext} from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import {TouchableNativeFeedback} from "react-native";
import {UserContext} from "../utils/context";

const Logout = () => {
    const {logout} = useContext(UserContext);
    return (
        <TouchableNativeFeedback
            onPress={() => {
                logout();
            }}
        >
            <Ionicons name="exit" size={24} color="gray"/>
        </TouchableNativeFeedback>
    );
};

export default Logout;