import {createContext} from "react";
import {LoginData} from "./types";
import {Theme} from "../styles/styleTypes";

export const UserContext = createContext({
    isAuth: false,
    logout: () => {},
    login: (loginData: LoginData) => {}
});

export const ThemeContext = createContext({
    theme: 'dark' as Theme,
    toggleTheme: () => { },
});