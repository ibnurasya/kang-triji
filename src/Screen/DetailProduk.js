import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
    Button,
} from 'react-native';
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';
import Login from './Login';
import { FontAwesome5 } from "@expo/vector-icons";
import Home from './Home';
import { RootContext } from '../../App';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    get container() {
        return this._container;
    },
    set _container(value) {
        this._container = value;
    },
    tinyLogo: {
        marginTop: 20,
        marginBottom: 10,
        width: 85,
        height: 100,
        borderRadius: 10,
        borderWidth: 0,
    },
    title: {
        color: '#000',
        // fontFamily: 'Montserrat',
        fontSize: 50,
        fontWeight: '700',
        marginLeft: 20,
        fontSize: 50,


    },
    box: {
        // width: '33%',
        // height: '33%',
        padding: 5,
        // backgroundColor: '#FFFFFF',
        // // borderRadius: 1000,
        // shadowColor: rgb(0, 0, 0, 0.25),
        // shadowOffset: '3px 3px 10px'
    },
    containerd: {
        width: "100%",
        // height: "85%",
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 1,
    },
    inner: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 20,
        borderRadius: 20,
        alignItems: 'center',
        shadowOffset: {
            "width": 3,
            "height": 3
        },
        shadowRadius: 10,
        shadowColor: "black",
        shadowOpacity: 1,
        elevation: 5,
        width: 120
        // justifyContent: 'center',
    },
    innerOrange: {
        backgroundColor: "#7B0F52"
    },
    root: {
        backgroundColor: '#fff',
        flex: 1,
    },
    h2: {
        // fontFamily: 'Montserrat',
        marginLeft: 20,
        fontSize: 50,
        marginTop: 5,
        color: '#000000',
    },
    vectorline: {
        marginTop: 10,
    },
    textbox: {
        fontSize: 10,
        marginTop: 10,
    },
    bagiantext: {
        // fontFamily: 'Montserrat',
        marginTop: 5,
        marginLeft: 20,
        fontSize: 20,
        color: '#000000',
        fontWeight: '700',
    },
    topseller: {
        // backgroundColor: '#eee',
        backgroundColor: '#2fbdad',
        width: 350,
        height: 200,
        marginLeft: 20,
        marginRight: 20,
        // border
        paddingBottom: 20,
        borderRadius: 20,
        shadowOffset: {
            "width": 3,
            "height": 3
        },
        shadowRadius: 10,
        shadowColor: "black",
        shadowOpacity: 1,
        elevation: 5,
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    topsellercont: {
        width: '50%',
        height: '50%',
        // backgroundColor:'white',
        padding: 5,
        // borde
    },
    topsellerinner: {
        // backgroundColor: '#FFFFFF',
        paddingBottom: 20,
        marginTop: 20,
        marginLeft: 1,

        width: 150,
        height: 150,
        // alignContent: 'center',
        // justifyContent: 'center',
    },
    deksripsiproduk:{
        marginRight: 22,
        marginLeft: 22,
        fontSize: 15,
    }

});

function DetailProduk({ route, navigation }) {
    const { produk } = React.useContext(RootContext);
    const [detailProduk, setDetailProduk] = useState({});

    useEffect(() => {
        const id = route.params.id;
        const item = produk.find((_, index) => index === id);
        if (item) setDetailProduk(item);
    }, [produk, route.params.id]);

    useEffect(() => {
        navigation.setOptions({
            drawerPosition: "right",
            headerTitle: () => <View><Image source={require("../../assets/logo.jpeg")} style={{ width: 40, height: 40, borderRadius: 100 }} /></View>,
            headerRight: (...props) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.openDrawer(); }} style={{ marginRight: 10 }}>
                        <Feather name="menu" size={24} color="black" />
                    </TouchableOpacity>
                );
            },
            headerLeft: () => null,
        });
    }, []);

    return (
        <ScrollView style={{ backgroundColor: "#fff", flex: 1, }}>
            <View style={styles.topseller}>
                <View style={styles.topsellercont}>
                    <View style={styles.topsellerinner}>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 20
                        }}>
                            <FontAwesome5 name="crown" size={24} color="#F5CA48" />Top Seller</Text>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 20,
                            fontSize: 20,
                            fontWeight: 'bold',
                            lineHeight: 20,
                        }}>{detailProduk.nama}</Text>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 2,
                            fontSize: 12,
                            fontWeight: 'bold',
                            lineHeight: 20,
                            color: 'white',
                        }}>Harga RP. {detailProduk.harga}</Text>

                        <Text style={{ marginLeft: 20 }}>
                            <AntDesign name="staro" size={24} color="black" />
                            <AntDesign name="staro" size={24} color="black" />
                            <AntDesign name="staro" size={24} color="black" />
                            <AntDesign name="staro" size={24} color="black" />
                            <AntDesign name="staro" size={24} color="black" /></Text>
                    </View>

                </View>
                <View style={styles.topsellercont}>
                    <View style={styles.topsellerinner}>
                        <Image source={detailProduk.image} style={{ height: 150, width: 150, borderRadius: 20 }} />
                    </View>
                </View>
            </View>
                <Text style={styles.deksripsiproduk}>{detailProduk.deskripsi}</Text>
        </ScrollView>
    );
}

export default DetailProduk;
