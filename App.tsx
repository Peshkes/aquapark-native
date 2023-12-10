import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Role} from "./api/Api";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
//screens
import EnterTheParkScreen from "./screens/EnterTheParkScreen";
import LeaveTheParkScreen from "./screens/LeaveTheParkScreen";
import AdminScreen from "./screens/admin/AdminScreen";
import InformationScreen from "./screens/InformationScreen";
import WhoIsInsideScreen from "./screens/WhoIsInsideScreen";
import {globalStyles} from "./styles/globalStyles";
//tab constants
const Tab = createBottomTabNavigator();
const nameEnterTheParkScreen = 'Enter';
const nameLeaveTheParkScreen = 'Leave';
const nameAdminScreen = 'Admin';
const nameInformationScreen = 'Info';
const nameWhoIsInsideScreen = 'Who is in?';
export default function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [role, setRole] = useState<Role>('admin');
    return (
        <View style={globalStyles.darkView}>
            <StatusBar barStyle="light-content" backgroundColor={'black'}/>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={role === 'admin' ? nameAdminScreen : nameEnterTheParkScreen}
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName: keyof typeof Ionicons.glyphMap;
                            let routeName = route.name;
                            switch (routeName){
                                case nameEnterTheParkScreen: {
                                    iconName = focused ? 'push' : 'push-outline';
                                    break;
                                }
                                case nameLeaveTheParkScreen: {
                                    iconName = focused ? 'share' : 'share-outline';
                                    break;
                                }
                                case nameAdminScreen: {
                                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                                    break;
                                }
                                case nameInformationScreen: {
                                    iconName = focused ? 'information' : 'information-outline';
                                    break;
                                }
                                case nameWhoIsInsideScreen: {
                                    iconName = focused ? 'help' : 'help-outline';
                                    break;
                                }
                                default:
                                    iconName = focused ? 'home' : 'home-outline';
                                    break;
                            }
                            return <Ionicons name={iconName} color={color} size={size * 1.2}></Ionicons>
                        },
                        tabBarLabelPosition: "below-icon",
                        tabBarStyle: {
                            backgroundColor: 'black',
                            borderTopColor: 'black',
                        },
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    })}
                >
                    <Tab.Screen name={nameEnterTheParkScreen} component={EnterTheParkScreen}/>
                    <Tab.Screen name={nameLeaveTheParkScreen} component={LeaveTheParkScreen}/>
                    {role === 'admin' && <Tab.Screen name={nameAdminScreen} component={AdminScreen}/>}
                    <Tab.Screen name={nameInformationScreen} component={InformationScreen}/>
                    <Tab.Screen name={nameWhoIsInsideScreen} component={WhoIsInsideScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
