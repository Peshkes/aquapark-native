import React, {useContext} from 'react';
import {Button, Keyboard, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {Formik} from "formik";
import * as yup from "yup";
import {ThemeContext, UserContext} from "../utils/context";
import ThemedInput from "../components/ThemedInput";
import ThemedText from "../components/ThemedText";

const reviewSchema = yup.object({
    login: yup
        .string()
        .email('Enter a valid email address')
        .min(4, 'Email address must be at least 4 characters long')
        .required('Email address is required'),
    password: yup
        .string()
        .matches(/[0-9]/, 'Password must contain at least one digit')
        .min(6, 'Password must be at least 6 characters long')
        .required('Required field'),
});

const AuthScreen = () => {
    const {theme} = useContext(ThemeContext);
    const {login} = useContext(UserContext);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{...globalStyles.container, ...globalStyles[`${theme}View`]}}>
                <Formik
                    initialValues={{login: '', password: ''}}
                    validationSchema={reviewSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        login(values);
                    }}>
                    {(props) => (
                        <View style={styles.formView}>
                            <ThemedInput
                                placeholder={'Email'}
                                placeholderTextColor={'gray'}
                                onChangeText={props.handleChange('login')}
                                value={props.values.login}
                                onBlur={props.handleBlur('login')}
                            />
                            {props.touched.login && props.errors.login &&
                                <ThemedText style={'ErrorText'}>{props.errors.login}</ThemedText>}
                            <ThemedInput
                                placeholder={'Password'}
                                placeholderTextColor={'gray'}
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                                onBlur={props.handleBlur('password')}
                                secureTextEntry
                            />
                            {props.touched.password && props.errors.password &&
                                <ThemedText style={'ErrorText'}>{props.errors.password}</ThemedText>}
                            <Button title={'Submit'} onPress={() => props.handleSubmit()}/>
                        </View>
                    )}
                </Formik>
        </View>
        </TouchableWithoutFeedback>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    formView: {
        width: "90%",
    }
});
