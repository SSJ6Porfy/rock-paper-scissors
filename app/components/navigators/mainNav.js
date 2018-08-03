import React from 'react';
import { Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import LoginForm from '../login/loginForm';
import SignupForm from "../login/signupForm";

const mainDrawer = DrawerNavigator(
    {
        "Login": {
            path: "/",
            screen: LoginForm
        },
        "Signup": {
            path: "/",
            screen: SignupForm
        }
    },
    {
        initialRouteName: 'Login',
        drawerPosition: 'left'
    }
);

export default mainDrawer;