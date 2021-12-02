import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import DetailProduk from "../Screen/DetailProduk";
import Home from "../Screen/Home";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { StackActions } from "@react-navigation/routers";


const Drawer = createDrawerNavigator();

export default function Stack() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{ drawerPosition: "right" }}
            drawerContent={(props) => {
                const navigate = (route) => {
                    if (route === "Login") {
                        props.navigation.dispatch(StackActions.popToTop());
                    }
                    props.navigation.navigate(route);
                }
                return (
                    <View style={{ flexDirection: "column", marginTop: 40 }}>
                        <DrawerItem text={"Home"} icon="home" action={() => navigate("Home")} />
                        <DrawerItem text={"Logout"} icon="logout" action={() => navigate("Login")} />
                    </View>
                );
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="DetailProduk" component={DetailProduk} />
        </Drawer.Navigator>
    );
}

const DrawerItem = ({ text, icon, action }) => {
    return (
        <TouchableOpacity onPress={() => {
            if (action) action();
        }}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: "row", alignItems: "center" }}>
                <AntDesign name={icon} size={24} color="black" style={{ marginRight: 10 }} />
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}