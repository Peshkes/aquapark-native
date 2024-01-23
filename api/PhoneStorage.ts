import {User} from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {date} from "yup";
import {Theme} from "../styles/styleTypes";

type UserData = {
    user: User
    expirationTime: number
}

export class PhoneStorage {
    static saveUser = async (user: User) => {
        const userData: UserData = {
            user: null,
            expirationTime: 0
        }
        const today = new Date();
        const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, 0, 0);
        userData.expirationTime = endOfToday.getTime();
        userData.user = user;
        try {
            const userDataString = JSON.stringify(userData);
            await AsyncStorage.setItem('userData', userDataString);
        } catch (e) {
            console.error('Ошибка сохранения пользователя:', e);
        }
    };

    static getUser = async (): Promise<User | null> => {
        try {
            const userString = await AsyncStorage.getItem('userData');
            let userData: UserData | null = null;
            if (userString) {
                userData = JSON.parse(userString);
                if (userData && userData.expirationTime && userData.expirationTime > Date.now()) {
                    return userData.user;
                } else {
                    await PhoneStorage.clearUser();
                }
            }
            return null;
        } catch (e) {
            console.error('Ошибка получения пользователя:', e);
            return null;
        }
    };

    static clearUser = async () => {
        try {
            await AsyncStorage.removeItem('userData');
        } catch (e) {
            console.error('Ошибка очистки пользователя:', e);
        }
    };

    static saveTheme = async (theme: Theme) => {
        try {
            await AsyncStorage.setItem('theme', theme);
        } catch (e) {
            console.error('Ошибка сохранения темы:', e);
        }
    }

    static getTheme = async (): Promise<Theme | null> => {
        try {
            const theme = await AsyncStorage.getItem('theme') as Theme;
            return theme || null;
        } catch (e) {
            console.error('Ошибка получения темы:', e);
            return null;
        }
    }


}