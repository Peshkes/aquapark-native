import React from 'react';
import {Text} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import ThemedView from '../components/ThemedView';

const LeaveTheParkScreen = () => {
    return (
        <ThemedView style={globalStyles.darkView}>
            <Text>LeaveTheParkScreen</Text>
        </ThemedView>
    );
};

export default LeaveTheParkScreen;