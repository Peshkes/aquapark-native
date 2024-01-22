import React, {useEffect, useState} from 'react';
import {Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {globalStyles} from '../../styles/globalStyles';

const QrScanScreen = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('I am ready to scan');
    const [isScanning, setIsScanning] = useState(false);

    const askForCameraPermission = async () => {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    const handleBarCodeScanned = ({data}: { data: string }) => {
        setScanned(true);
        setText(data);
        setIsScanning(false);
    };

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const startScanning = () => {
        setIsScanning(true);
        setScanned(false);
        setText('Scanning');
    };

    const stopScanning = () => {
        setIsScanning(false);
        setScanned(false);
    };

    if (!hasPermission) {
        return (

            <View style={{...globalStyles.darkView, ...globalStyles.container}}>
                <Text style={{...globalStyles.darkText, ...styles.text}}>
                    No access to camera
                </Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()}/>
            </View>

        );
    }

    return (
        <View style={{...globalStyles.container, ...globalStyles.darkView}}>
            <View style={styles.barcodeBox}>
                {isScanning && (<BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{height: 400, width: 400}}
                />)}
            </View>
            <Text style={{...globalStyles.darkText, ...styles.text}}>{text}</Text>

            {!isScanning && (
                <Button title={'Start Scan'} onPress={startScanning}/>
            )}
            {isScanning && (
                <Button title={'Stop Scan'} onPress={stopScanning}/>
            )}
        </View>
    );
};

export default QrScanScreen;

const styles = StyleSheet.create({
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
    },
});
