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
    FlatList,
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
        // backgroundColor: '#2fbdad',
        backgroundColor: '#fff',
        width: 350,
        height: 250,
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
        flex: 1,
        width: 150,
        height: 150,
        // alignContent: 'center',
        // justifyContent: 'center',
    },
    deksripsiproduk: {
        marginRight: 22,
        marginLeft: 22,
        fontSize: 15,
    },
    hargast: {
        marginLeft: 22,
        marginBottom: 10,
        fontSize: 50,
        marginTop: 5,
        color: '#E4723C',
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
    orderText: {
        fontSize: 14,
        color: "#fff"
    },
    ingredientsWrapper: {
        marginTop: 40,

    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        color: 'black',
    },
    ingredientsListWrapper: {
        marginLeft: 20,
        paddingVertical: 20,
        height:150,
        
    },
    ingredientsItemWrapper: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 25,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },  
    ingredientsImage: {
        resizeMode: 'contain',
        width: 75,
        height: 75,
        borderRadius:20,
    },

});

function DetailProduk({ route, navigation }) {
    const { produk } = React.useContext(RootContext);
    const [detailProduk, setDetailProduk] = useState({});
    const { item } = route.params;

    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={styles.ingredientsItemWrapper}>
                <Image source={item.image} style={styles.ingredientsImage} />
            </View>
        )
    }

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
            <View style={styles.container}>
                <Text style={styles.h2}>{detailProduk.jenis}</Text>
                <Text style={styles.title}>{detailProduk.nama}</Text>
                <Text style={styles.hargast}>RP. {detailProduk.harga}</Text>
            </View>
            <View style={styles.topseller}>
                <View style={styles.topsellercont}>
                    <View style={styles.topsellerinner}>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 20,
                            fontSize: 20,
                            fontWeight: 'bold',
                            lineHeight: 20,
                        }}>Ratings</Text>
                        <Text style={{ marginLeft: 20 }}>
                            <AntDesign name="staro" size={15} color="black" />  5.0</Text>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 20,
                            fontSize: 20,
                            fontWeight: 'bold',
                            lineHeight: 20,
                        }}>Berat</Text>
                        <Text style={{ marginLeft: 20 }}> {detailProduk.weight}</Text>

                        <Text style={{
                            marginLeft: 20,
                            marginTop: 20,
                            fontSize: 20,
                            fontWeight: 'bold',
                            lineHeight: 20,
                        }}>kadaluarsa</Text>
                        <Text style={{ marginLeft: 20 }}> {detailProduk.expired}</Text>
                    </View>


                </View>
                <View style={styles.topsellercont}>
                    <View style={styles.topsellerinner}>
                        <Image source={detailProduk.image} style={{ height: 150, width: 150, borderRadius: 20, marginTop: 20 }} />
                    </View>
                </View>
            </View>
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.bagiantext}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList
                        data={detailProduk.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={detailProduk => detailProduk.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            {/* <View>
                <Text style={styles.bagiantext}> Ingredients</Text>
                <ScrollView horizontal style={{ flex: 1, minHeight: 220, maxHeight: 220 }}>
                    {produk.map(({ nama, image, topseller }, index) => {
                        return (
                            <Ingredientss/>
                        );
                    })}
                </ScrollView>
            </View> */}
            <View>
                <TouchableOpacity onPress={() => alert("Pesanan telah masuk")}>
                    <View style={styles.orderWrapper}>
                        <Text style={styles.orderText}>
                            Pesan
                        </Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            
            {/* <SizedBox height={16} /> */}
        </ScrollView>
    );
};

// function Ingredientss({ image, text, id, }) {


//     return <View style={styles.box}>
//         <View style={[styles.inner]}>
//             <FlatList
//                 data={item.ingredients}
//                 renderItem={renderIngredientsItem}
//                 keyExtractor={item => item.id}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//             />
//             {/* <Image source={image} style={styles.tinyLogo} />
//             <Text style={[styles.textbox]}>{text}</Text> */}
//         </View>
//     </View>;
// }

export default DetailProduk;
