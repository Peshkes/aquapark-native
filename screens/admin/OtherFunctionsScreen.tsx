import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from "react-native";
import {globalStyles} from "../../styles/globalStyles";
import {useNavigation} from "@react-navigation/native";
import ThemedView from "../../components/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {ThemeContext, UserContext} from "../../utils/context";

type Button = {
    title: string
    screen?: string
    function?: () => void
    iconName: keyof typeof Ionicons.glyphMap;
}

const OtherFunctionsScreen = () => {
    const navigation = useNavigation();
    const { toggleTheme } = useContext(ThemeContext);
    const { logout } = useContext(UserContext);

    const allButtons: Array<Button> = [
        { title: 'Theme', function: toggleTheme, iconName: 'moon-outline' },
        { title: 'Logout', function: logout, iconName: 'power-outline' },
        { title: 'Registration', screen: 'Registration', iconName: 'person-add-outline' },
        { title: 'Enter', screen: 'Enter', iconName: 'log-in-outline' },
        { title: 'Information', screen: 'Information', iconName: 'information-circle-outline' },
        { title: 'Leave', screen: 'Leave', iconName: 'log-out-outline' },
    ];

    return (
        <ThemedView style={globalStyles.stackSubView}>
            <FlatList
                contentContainerStyle={styles.listContainer}
                numColumns={2}
                data={allButtons}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.button}
                        onPress={() => (item.function ? item.function() : navigation.navigate(item.screen as never))}
                    >
                        <Ionicons name={item.iconName} size={34} color="white" />
                        <Text style={styles.buttonText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey', // ваш цвет фона кнопки
        padding: 10,
        margin: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        marginTop: 8,
    },
});


export default OtherFunctionsScreen;