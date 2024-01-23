import React, {useContext} from 'react';
import {Text} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {ThemeContext} from "../utils/context";
import {TextType} from "../styles/styleTypes";
type Props = {
    children: any,
    style?: TextType | any
}
const ThemedText = (props: Props) => {
    const {theme} = useContext(ThemeContext);
    return (
        <Text style={{...globalStyles[`${theme}Text`], ...props.style}}>{props.children}</Text>
    );
};

export default ThemedText;