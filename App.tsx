import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from "react";
import {Role} from "./api/Server";
import {NavigationContainer} from "@react-navigation/native";
import {globalStyles} from "./styles/globalStyles";
import TabEmployeeNavigator from "./navigation/TabEmployeeNavigator";
import TabAdminNavigator from "./navigation/TabAdminNavigator";

export default function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [role, setRole] = useState<Role>('admin');
    return (
        <View style={globalStyles.darkView}>
            <StatusBar barStyle="light-content" backgroundColor={'black'}/>
            <NavigationContainer>
                {role == "employee" ? <TabEmployeeNavigator/> : <TabAdminNavigator/>}
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
