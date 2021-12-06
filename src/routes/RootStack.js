import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Login from "../Screen/Login";
import DrawerStack from "./DrawerStack";
import RegisterScreen from "../Screen/RegisterScreen";
import ForgotPassword from "../Screen/ForgotPassword";
import ForgotPasswordVerify from "../Screen/ForgotPasswordVerify";
import UserProfile from "../Screen/UserProfile";
import Keranjang from "../Screen/Keranjang";
const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={DrawerStack} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ForgotPasswordVerify" component={ForgotPasswordVerify} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="Keranjang" component={Keranjang} />
            
            
            
        </Stack.Navigator>
    );
}

export default RootStack;