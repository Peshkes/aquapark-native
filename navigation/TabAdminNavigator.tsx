import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import EnterTheParkScreen from "../screens/EnterTheParkScreen";
import LeaveTheParkScreen from "../screens/LeaveTheParkScreen";
import InformationScreen from "../screens/InformationScreen";
import WhoIsInsideScreen from "../screens/WhoIsInsideScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import qrScanScreen from "../screens/admin/QrScanScreen";
import QrScanScreen from "../screens/admin/QrScanScreen";
import IssueABraceletScreen from "../screens/admin/IssueABraceletScreen";
import AnalyticsScreen from "../screens/admin/AnalyticsScreen";
import OtherEmployeeFunctionsScreen from "../screens/admin/OtherEmployeeFunctionsScreen";

const Tab = createBottomTabNavigator();
const nameQRScanScreen = 'QRScan';
const nameIssueABraceletScreen = 'Bracelet';
const nameAnalyticsScreen = 'Analytics';
const nameWhoIsInsideScreen = 'Who is in?';
const nameOtherFunctionsScreen = 'Other';
const TabAdminNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={nameQRScanScreen}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName: keyof typeof Ionicons.glyphMap;
                    let routeName = route.name;
                    switch (routeName){
                        case nameQRScanScreen: {
                            iconName = focused ? 'qr-code' : 'qr-code-outline';
                            break;
                        }
                        case nameIssueABraceletScreen: {
                            iconName = focused ? 'watch' : 'watch-outline';
                            break;
                        }
                        case nameAnalyticsScreen: {
                            iconName = focused ? 'analytics' : 'analytics-outline';
                            break;
                        }
                        case nameWhoIsInsideScreen: {
                            iconName = focused ? 'help' : 'help-outline';
                            break;
                        }
                        case nameOtherFunctionsScreen: {
                            iconName = focused ? 'people' : 'people-outline';
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
            <Tab.Screen name={nameQRScanScreen} component={QrScanScreen}/>
            <Tab.Screen name={nameIssueABraceletScreen} component={IssueABraceletScreen}/>
            <Tab.Screen name={nameAnalyticsScreen} component={AnalyticsScreen}/>
            <Tab.Screen name={nameWhoIsInsideScreen} component={WhoIsInsideScreen}/>
            <Tab.Screen name={nameOtherFunctionsScreen} component={OtherEmployeeFunctionsScreen}/>
        </Tab.Navigator>
    );
};

export default TabAdminNavigator;