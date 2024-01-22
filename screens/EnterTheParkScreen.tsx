import React, {useEffect, useState} from 'react';
import {Button, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import ThemedView from "../components/ThemedView";
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
        <ThemedView>
            <Text style={globalStyles.darkText}>{text}</Text>
            <Button title={'Go!'} onPress={pressHandler}></Button>
        </ThemedView>
    );
};

export default EnterTheParkScreen;