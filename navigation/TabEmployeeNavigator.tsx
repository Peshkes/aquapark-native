import React, {useContext} from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import EnterTheParkScreen from "../screens/EnterTheParkScreen";
import LeaveTheParkScreen from "../screens/LeaveTheParkScreen";
import InformationScreen from "../screens/InformationScreen";
import WhoIsInsideScreen from "../screens/WhoIsInsideScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ToggleTheme from "../components/ToggleTheme";
import Logout from "../components/Logout";
import {globalStyles} from "../styles/globalStyles";
import {ThemeContext} from "../utils/context";

const Tab = createBottomTabNavigator();
const nameEnterTheParkScreen = 'Enter';
const nameLeaveTheParkScreen = 'Leave';
const nameInformationScreen = 'Info';
const nameWhoIsInsideScreen = 'Who is in?';
const TabEmployeeNavigator = () => {
    const {theme} = useContext(ThemeContext);
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
                headerLeftContainerStyle:{
                    paddingLeft: 20
                },
                headerRightContainerStyle:{
                    paddingRight: 20
                }
            })}
        >
            <Tab.Screen name={nameEnterTheParkScreen} component={EnterTheParkScreen}  options={{
                headerLeft: () => (<ToggleTheme/>),
                headerRight: () => (<Logout/>)
            }}/>
            <Tab.Screen name={nameLeaveTheParkScreen} component={LeaveTheParkScreen}  options={{
                headerLeft: () => (<ToggleTheme/>),
                headerRight: () => (<Logout/>)
            }}/>
            <Tab.Screen name={nameInformationScreen} component={InformationScreen}  options={{
                headerLeft: () => (<ToggleTheme/>),
                headerRight: () => (<Logout/>)
            }}/>
            <Tab.Screen name={nameWhoIsInsideScreen} component={WhoIsInsideScreen}  options={{
                headerLeft: () => (<ToggleTheme/>),
                headerRight: () => (<Logout/>)
            }}/>
        </Tab.Navigator>
    );
};

export default TabEmployeeNavigator;