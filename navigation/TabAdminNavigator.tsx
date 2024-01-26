import React, {useContext} from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {globalStyles} from "../styles/globalStyles";
import {ThemeContext} from "../utils/context";

import QrScanScreen from "../screens/admin/QrScanScreen";
import IssueABraceletScreen from "../screens/admin/IssueABraceletScreen";
import AnalyticsScreen from "../screens/admin/AnalyticsScreen";
import WhoIsInsideScreen from "../screens/WhoIsInsideScreen";
import StackAdminNavigator from "./StackAdminNavigator";

const Tab = createBottomTabNavigator();

const tabData = [
  { name: 'QRScan', component: QrScanScreen, icon: 'qr-code' },
  { name: 'Bracelet', component: IssueABraceletScreen, icon: 'watch' },
  { name: 'Analytics', component: AnalyticsScreen, icon: 'analytics' },
  { name: 'Who is in?', component: WhoIsInsideScreen, icon: 'help' },
  { name: 'Other', component: StackAdminNavigator, icon: 'people'},
];

const TabAdminNavigator = () => {
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
      })}
    >
      {tabData.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={tab.name === "Other" ? {headerShown: false}: undefined}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabAdminNavigator;