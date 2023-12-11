import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import EnterTheParkScreen from "../screens/EnterTheParkScreen";
import LeaveTheParkScreen from "../screens/LeaveTheParkScreen";
import InformationScreen from "../screens/InformationScreen";
import WhoIsInsideScreen from "../screens/WhoIsInsideScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const nameEnterTheParkScreen = 'Enter';
const nameLeaveTheParkScreen = 'Leave';
const nameInformationScreen = 'Info';
const nameWhoIsInsideScreen = 'Who is in?';
const TabEmployeeNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={nameEnterTheParkScreen}
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
            <Tab.Screen name={nameInformationScreen} component={InformationScreen}/>
            <Tab.Screen name={nameWhoIsInsideScreen} component={WhoIsInsideScreen}/>
        </Tab.Navigator>
    );
};

export default TabEmployeeNavigator;