import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from './src/Screen/Login';
import DetailProduk from './src/Screen/DetailProduk';
import Home from './src/Screen/Home';
import RootStack from './src/routes/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import produk from "./src/produk";

export const RootContext = React.createContext({ produk });

export default function App() {
  return (
    <RootContext.Provider value={{ produk }}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </RootContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },

});
