import {StatusBar, StatusBarStyle, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {Server} from "./api/Server";
import {NavigationContainer} from "@react-navigation/native";
import {globalStyles} from "./styles/globalStyles";
import TabEmployeeNavigator from "./navigation/TabEmployeeNavigator";
import TabAdminNavigator from "./navigation/TabAdminNavigator";
import {LoginData, User} from "./utils/types";
import {ThemeContext, UserContext} from './utils/context';
import AuthScreen from "./screens/AuthScreen";
import {Theme} from "./styles/styleTypes";
import {PhoneStorage} from "./api/PhoneStorage";

export default function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<User>(null);
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const checkAuthentication = async () => {
            const user = await PhoneStorage.getUser();
            if (user) {
                setUser(user);
                setIsAuth(true);
            }
        };
        checkAuthentication();
    }, []);

    return (
        <View style={globalStyles.darkView}>
            <StatusBar barStyle={globalStyles[`${theme}StatusBar`].color as StatusBarStyle} backgroundColor={globalStyles[`${theme}View`].backgroundColor}/>
            <ThemeContext.Provider value={{
                theme,
                toggleTheme: () => {
                    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
                },
            }}>
                <UserContext.Provider value={{
                    isAuth,
                    logout: async () => {
                        setIsAuth(false);
                        setUser(null);
                        await PhoneStorage.clearUser();
                    },
                    login: async (loginData: LoginData) => {
                        try {
                            const user = await Server.login(loginData);
                            setUser(user);
                            setIsAuth(true);
                            await PhoneStorage.saveUser(user);
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
