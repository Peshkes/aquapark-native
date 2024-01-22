import React, {useContext} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import EnterTheParkScreen from "../screens/EnterTheParkScreen";
import LeaveTheParkScreen from "../screens/LeaveTheParkScreen";
import InformationScreen from "../screens/InformationScreen";
import RegistrationScreen from "../screens/admin/RegistrationScreen";
import OtherFunctionsScreen from "../screens/admin/OtherFunctionsScreen";
import {ThemeContext, UserContext} from "../utils/context";
import {globalStyles} from "../styles/globalStyles";

const Stack = createNativeStackNavigator();
const StackAdminNavigator = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <Stack.Navigator initialRouteName={'OtherFunctions'} screenOptions={{
            headerStyle: {
                backgroundColor: globalStyles[`${theme}View`].backgroundColor,
            },
            headerTintColor: globalStyles[`${theme}Text`].color,
            headerTitleStyle: {
                fontWeight: 'bold',
            },

        }}>
            <Stack.Screen name={"OtherFunctions"} component={OtherFunctionsScreen} options={{headerTitle: "Other"}}/>
            <Stack.Screen name={"Registration"} component={RegistrationScreen}/>
            <Stack.Screen name={"Enter"} component={EnterTheParkScreen}/>
            <Stack.Screen name={"Leave"} component={LeaveTheParkScreen}/>
            <Stack.Screen name={"Information"} component={InformationScreen}/>
        </Stack.Navigator>
    );
};

export default StackAdminNavigator;