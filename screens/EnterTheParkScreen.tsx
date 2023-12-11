import React, {useEffect, useState} from 'react';
import {Button, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
// import {NFC} from "../api/NFC";

const EnterTheParkScreen = () => {
    const [text, setText] = useState<string>('I am ready');

    useEffect(() => {
        // NFC.start();
        // return NFC.cleanUp;
    }, [])

    const pressHandler = () => {
        // NFC.readData().then(value => setText(value));
    }

    return (
        <View style={globalStyles.darkView}>
            <Text style={globalStyles.darkText}>{text}</Text>
            <Button title={'Go!'} onPress={pressHandler}></Button>
        </View>
    );
};

export default EnterTheParkScreen;