import {Keyboard, StatusBar, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from "react";
import {Server} from "./api/Server";
import {NavigationContainer} from "@react-navigation/native";
import {globalStyles} from "./styles/globalStyles";
import TabEmployeeNavigator from "./navigation/TabEmployeeNavigator";
import TabAdminNavigator from "./navigation/TabAdminNavigator";
import {LoginData, User} from "./utils/types";
import {ThemeContext, UserContext} from './utils/context';
import AuthScreen from "./screens/AuthScreen";
import {Theme} from "./styles/styleTypes";

export default function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<User>(null);
    const [theme, setTheme] = useState<Theme>('dark');

    return (
        <View style={globalStyles.darkView}>
            <StatusBar barStyle="light-content" backgroundColor={'black'}/>
            <ThemeContext.Provider value={{
                theme,
                toggleTheme: () => {
                    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
                },
            }}>
                <UserContext.Provider value={{
                    isAuth,
                    logout: () => {
                        setIsAuth(false);
                        setUser(null);
                    },
                    login: async (loginData: LoginData) => {
                        try {
                            const user = await Server.login(loginData);
                            setUser(user);
                            setIsAuth(true);
                        } catch (e: any){
                            alert("Error: " + e.message);
                        }
                    }
                }}>
                    {isAuth ?
                        <NavigationContainer>
                            {user?.roles.includes("admin") ? <TabAdminNavigator/> : <TabEmployeeNavigator/>}
                        </NavigationContainer>
                        :
                        <AuthScreen/>
                    }
                </UserContext.Provider>
            </ThemeContext.Provider>
        </View>
    );
}
