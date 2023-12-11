import React, {ReactComponentElement, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import {globalStyles} from "../../styles/globalStyles";

const QrScanScreen = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')
    const askForCameraPermission = async () => {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    }
    const handleBarCodeScanned = ({data}: { data: string }) => {
        setScanned(true);
        setText(data);
    };

    useEffect(() => {
        askForCameraPermission();
    }, []);

    if (!hasPermission) {
        return (
            <View style={{...globalStyles.darkView, ...styles.container}}>
                <Text style={{...globalStyles.darkText,...styles.text}}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()}/>
            </View>)
    }

    return (
        <View style={{...styles.container, ...globalStyles.darkView}}>
            <View style={styles.barcodeBox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{height: 400, width: 400}}/>
            </View>
            <Text style={{...globalStyles.darkText,...styles.text}}>{text}</Text>

            {scanned && <Button title={'Scan again?'} onPress={() => {
                    setScanned(false);
                    setText("scanning...")
            }} color='tomato'/>}
        </View>
    );
}

export default QrScanScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        margin: 20,
    },
    barcodeBox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    }
});


