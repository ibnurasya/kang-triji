import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Login from "../Screen/Login";
import DrawerStack from "./DrawerStack";


const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={DrawerStack} />
        </Stack.Navigator>
    );
}

export default RootStack;