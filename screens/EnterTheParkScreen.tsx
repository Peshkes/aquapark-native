import React, {useEffect, useState} from 'react';
import {Button, Platform, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
// import {nfcManager, NfcTech} from 'react-native-nfc-manager'

const EnterTheParkScreen = () => {
    const [text, setText] = useState<string>('I am ready');
    //
    // useEffect(() => {
    //     // nfcManager.start();
    //     return cleanUp;
    // }, [])
    //
    // const cleanUp = () => {
    //     nfcManager.cancelTechnologyRequest().catch(() => 0);
    // }
    // const readData = async () => {
    //     try {
    //         const tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
    //         await nfcManager.requestTechnology(tech, {alertMessage: 'Ready to magic'});
    //         const command = Platform.OS === 'ios' ? nfcManager.sendMifareCommandIOS : nfcManager.transceive;
    //         let response = await command([0x3a, 4, 4]);
    //         const payloadLength = parseInt(response.toString().split(",")[1]);
    //         const payloadPages = Math.ceil(payloadLength / 4);
    //         const startPage = 5;
    //         const endPage = startPage + payloadPages - 1;
    //
    //         response = await command([0x3A, startPage, endPage]);
    //         const bytes = response.toString().split(",");
    //         let text = "";
    //
    //         for (let i = 0; i < bytes.length; i++) {
    //             if (i < 5) {
    //                 continue;
    //             }
    //             if (parseInt(bytes[i]) === 254) {
    //                 break;
    //             }
    //             text = text + String.fromCharCode(parseInt(bytes[i]));
    //         }
    //
    //         setText(text)
    //         cleanUp();
    //     } catch (error: any) {
    //         setText(error.message);
    //         cleanUp();
    //     }
    // }

    return (
        <View style={globalStyles.darkView}>
            <Text style={globalStyles.darkText}>{text}</Text>
            {/*<Button title={'Go!'} onPress={readData}></Button>*/}
        </View>
    );
};

export default EnterTheParkScreen;