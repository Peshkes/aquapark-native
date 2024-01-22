import React, {useContext} from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from "react-native";
import {ThemeContext} from "../utils/context";
import {globalStyles} from "../styles/globalStyles";
type Props = {
    style?: any
    children: any
}
const ThemedView = (props: Props) => {
    const {theme} = useContext(ThemeContext);
    return (
        <View style={{...globalStyles[`${theme}View`], ...props.style}}>
            {props.children}
        </View>
    );
};

export default ThemedView;