import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    darkView:{
        flex: 1,
        backgroundColor: 'black',
    },
    lightView:{
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkText: {
        color: 'white',
    },
    lightText: {
        color: 'white',
    },
    darkInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginVertical: 5,
        color: "white",
    },
    lightInput: {

    },
    darkErrorText: {
        color: "#ff6868",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        textAlign: "center"
    },
    lightErrorText: {

    }
});