import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext, useEffect, useState } from 'react';
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
import DetailProduk from './DetailProduk';
import { RootContext } from '../context/RootContext';
import userAPI from '../api/user';

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
    orderWrapper: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: '#F08233',
        borderRadius: 50,
        paddingVertical: 21,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderWrapper1: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: '#ADADAD',
        borderRadius: 50,
        paddingVertical: 21,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailuser: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: 'rgb(58, 58, 60)',
        borderRadius: 50,
        paddingVertical: 21,
        flexDirection: 'row',
    },
    detailusertext:{
        fontSize: 14,
        color: "#fff",
        marginLeft: 20,
    },
    orderText: {
        fontSize: 14,
        color: "#fff",
    },

});

const Home = ({ navigation }) => {
    const { userDetail } = useContext(RootContext)

    useEffect(() => {
        navigation.setOptions({
            drawerPosition: "right",
            headerTitle: () => <View><Image source={require("../../assets/logo.jpeg")} style={{ width: 40, height: 40, borderRadius: 100 }} /></View>,
            headerRight: (...props) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.openDrawer(); }} style={{ marginRight: 10 }}>
                        <Feather name="menu" size={24} color="black" />
                    </TouchableOpacity>
                )
            },
            headerLeft: () => null,
        });

    }, [])


    return (
        <ScrollView style={{ backgroundColor: "#fff", flex: 1, }}>
            <View style={styles.container}>
                <Text style={styles.h2}>User Profile</Text>
            </View>
            {

            }
            <View>
                <View style={styles.detailuser}>
                    <Text style={styles.detailusertext}>
                        Nama Lengkap    :  {userDetail?.name ?? ""}
                    </Text>
                </View>
                <View style={styles.detailuser}>
                    <Text style={styles.detailusertext}>
                    Nomor HP             : {userDetail?.no_hp ?? ""}
                    </Text>
                </View>
                <View style={styles.detailuser}>
                    <Text style={styles.detailusertext}>
                        Email                    : {userDetail?.email ?? ""}
                    </Text>
                </View>
               
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordVerify")}>
                    <View style={styles.orderWrapper}>
                        <Text style={styles.orderText}>
                            Ubah Password?
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordVerify")}>
                    <View style={styles.orderWrapper1}>
                        <Text style={styles.orderText}>
                            Hapus Akun?
                        </Text>
                    </View>
                </TouchableOpacity>
                

            </View>



        </ScrollView>
    );
};



function MenuItem({ image, text, id, highlighted }) {
    const navigation = useNavigation();

    return <View style={styles.box}>
        <View style={[styles.inner, highlighted ? styles.innerOrange : {}]}>
            <Image source={image} style={styles.tinyLogo} />
            <TouchableOpacity onPress={() => { navigation.navigate("DetailProduk", { id }) }}>
                <AntDesign name="rightcircleo" size={24} color={highlighted ? "white" : "#5D7283"} />
            </TouchableOpacity>
            <Text style={[styles.textbox, highlighted ? { color: "white" } : {}]}>{text}</Text>
        </View>
    </View>;
}

export default Home;
