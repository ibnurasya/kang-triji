import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext, useEffect } from 'react';
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
import { Feather } from "../../node_modules/@expo/vector-icons";
import { AntDesign } from "../../node_modules/@expo/vector-icons";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';
import Login from './Login';
import { FontAwesome5 } from "../../node_modules/@expo/vector-icons";
import DetailProduk from './DetailProduk';
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

});

const Home = ({ navigation }) => {
    const { produk } = useContext(RootContext)

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
        })
    }, [])

    return (
        <ScrollView style={{ backgroundColor: "#fff", flex: 1, }}>
            <View style={styles.container}>
                <Text style={styles.h2}>Kang</Text>
                <Text style={styles.title}>TRIJI</Text>
                <Text style={{
                    borderWidth: 2,
                    lineHeight: 30,
                    marginLeft: 18,
                    marginRight: 18,
                    borderRadius: 20,
                    borderColor: "#CDCDCD",
                    color: '#CDCDCD',
                    marginBottom: 20
                }}>  <AntDesign margintop='5' marginLeft='10' name="search1" size={20} color="black" />  Search</Text>
                
            </View>
            <View style={styles.containerd}>
                <Text style={styles.bagiantext}>TOP SELLER</Text>
            </View>
            <View style={styles.topseller}>
                <View style={styles.topsellercont}>
                    <View style={styles.topsellerinner}>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 20
                        }}>
                            <FontAwesome5 name="crown" size={24} color="#F5CA48" />  Top Seller</Text>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 20,
                            fontSize: 20,
                            fontWeight: 'bold',
                            lineHeight: 20,
                        }}>Putu Belanda</Text>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 2,
                            fontSize: 12,
                            fontWeight: 'bold',
                            lineHeight: 20,
                            color: 'white',
                        }}>Harga RP. 15.000,00,-</Text>

                        <Text style={{ marginLeft: 20 }}>
                            <AntDesign name="staro" size={24} color="black" />
                            <AntDesign name="staro" size={24} color="black" />
                            <AntDesign name="staro" size={24} color="black" />
                            <AntDesign name="staro" size={24} color="black" />
                            <AntDesign name="staro" size={24} color="black" />
                        </Text>
                    </View>

                </View>
                
                <View style={styles.topsellercont}>
                    <View style={styles.topsellerinner}>
                        <Image source={require('../../assets/putubelanda.jpeg')} style={{ height: 150, width: 150, borderRadius: 20 }} />
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                    <Text style={styles.bagiantext}>MENU</Text>
                    </View>
            <ScrollView horizontal style={{ flex: 1, minHeight: 220, maxHeight: 220 }}>
                {produk.map(({ nama, image, topseller }, index) => {
                    return (
                        <MenuItem key={index} id={index} image={image} text={nama} highlighted={topseller} />
                    );
                })}
            </ScrollView>
           

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
