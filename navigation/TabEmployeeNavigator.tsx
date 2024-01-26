import React, {useContext} from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {globalStyles} from "../styles/globalStyles";
import {ThemeContext} from "../utils/context";

import EnterTheParkScreen from "../screens/EnterTheParkScreen";
import LeaveTheParkScreen from "../screens/LeaveTheParkScreen";
import InformationScreen from "../screens/InformationScreen";
import WhoIsInsideScreen from "../screens/WhoIsInsideScreen";
import StackAdminNavigator from "./StackAdminNavigator";

const Tab = createBottomTabNavigator();

const tabData = [
    { name: 'Enter', component: EnterTheParkScreen, icon: 'push' },
    { name: 'Leave', component: LeaveTheParkScreen, icon: 'share' },
    { name: 'Info', component: InformationScreen, icon: 'information' },
    { name: 'Who is in?', component: WhoIsInsideScreen, icon: 'help' },
    { name: 'Other', component: StackAdminNavigator, icon: 'people'},
];

const TabEmployeeNavigator = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Tab.Navigator
            initialRouteName={tabData[0].name}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const tabInfo = tabData.find(tab => tab.name === route.name);
                    if (!tabInfo) return null;

                    const iconName = focused ? tabInfo.icon as keyof typeof Ionicons.glyphMap : `${tabInfo.icon}-outline` as keyof typeof Ionicons.glyphMap;
                    return <Ionicons name={iconName} color={color} size={size * 1.2} />;
                },
                tabBarLabelPosition: "below-icon",
                tabBarStyle: {
                    backgroundColor: globalStyles[`${theme}View`].backgroundColor,
                    borderTopColor: globalStyles[`${theme}View`].backgroundColor,
                },
                headerStyle: {
                    backgroundColor: globalStyles[`${theme}View`].backgroundColor,
                },
                headerTintColor: globalStyles[`${theme}Text`].color,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20,
                },
                headerRightContainerStyle: {
                    paddingRight: 20,
                },
            })}
        >
            {tabData.map(tab => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                />
            ))}
        </Tab.Navigator>
    );
};

export default TabEmployeeNavigator;
