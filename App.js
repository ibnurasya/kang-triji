import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./src/Screen/Login";
import DetailProduk from "./src/Screen/DetailProduk";
import Home from "./src/Screen/Home";
import RootStack from "./src/routes/RootStack";
import { NavigationContainer } from "@react-navigation/native";
import RootContextProvider from "./src/context/RootContext";

export default function App() {
  return (
    <RootContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </RootContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
});
