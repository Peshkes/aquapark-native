import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import EnterTheParkScreen from "../screens/EnterTheParkScreen";
import LeaveTheParkScreen from "../screens/LeaveTheParkScreen";
import InformationScreen from "../screens/InformationScreen";

const Stack = createNativeStackNavigator();
const StackAdminNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={'Enter'}>
            <Stack.Screen name={"Enter"} component={EnterTheParkScreen}/>
            <Stack.Screen name={"Leave"} component={LeaveTheParkScreen}/>
            <Stack.Screen name={"Information"} component={InformationScreen}/>
        </Stack.Navigator>
    );
};

export default StackAdminNavigator;