import React, { useState } from 'react';
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
import Home from './Home';

// Modules
import { Controller, useForm } from 'react-hook-form';
// Components
// import SizedBox from './src/components/SizedBox';
const SizedBox = ({ height, width }) => {
    return <View style={{ height, width }} />;
};

function useStyles() {
    return StyleSheet.create({
        button: {
            alignItems: 'center',
            // backgroundColor: '#8bc34a',
            backgroundColor:'#7B0F52',
            borderRadius: 8,
            height: 48,
            justifyContent: 'center',
        },
        buttonTitle: {
            color: '#FFFFFF',
            fontSize: 17,
            fontWeight: '600',
            lineHeight: 22,
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingVertical: 32,
        },
        actionContainer: {
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        form: {
            alignItems: 'center',
            backgroundColor: 'rgb(58, 58, 60)',
            borderRadius: 8,
            flexDirection: 'row',
            height: 48,
            paddingHorizontal: 16,
            marginTop: 20,
        },
        label: {
            color: 'rgba(235, 235, 245, 0.6)',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
            width: 80,
        },
        root: {
            backgroundColor: '#fff',
            flex: 1,
        },
        safeAreaView: {
            flex: 1,
        },
        subtitle: {
            color: '#888',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 22,
            alignSelf: 'baseline',
            marginLeft: 10,
        },
        textButton: {
            color: '#000',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
        },
        textInput: {
            color: '#fff',
            flex: 1,
        },

        title: {
            color: '#000',
            fontSize: 24,
            fontWeight: '700',
            lineHeight: 34,
            alignSelf: 'center',
        },
        tinyLogo: {
            width: '100%',
            height: '100%',
            // margin: 'auto',
            alignItems:'center',
            marginLeft: 50,
            borderRadius: 20,
        }
    });
}

const Login = ({navigation}) => {
    const namaInput = React.useRef();
    const nohpinput = React.useRef();
    const emailInput = React.useRef(null);
    const passwordInput = React.useRef(null);
    
    const [islogin,setlogin]=useState(false);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            nama: 'a',
            nohp: 'a',
            email: 'a',
            password: 'a',
        },
    });


    const onSubmit = (({ email, password }) => {
        // Alert.alert('Data', `Email: ${email}\nPassword: ${password}`);
        navigation.navigate("ForgotPasswordVerify")
        console.log('berhasil login');
        // setlogin(true);
    });



    const styles = useStyles();
    // if (islogin) return <Home/>;
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.root}>
                <SafeAreaView style={styles.safeAreaView}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.content}>
                        <View style={{ width: 300,height:150, alignItems: 'center', marginBottom: 20 }}>
                            <Image source={require('../../assets/Picture1.png')} style={styles.tinyLogo} />
                        </View>
                        {/* <Text style={styles.title}>Welcome To Agri Golden Mart!</Text> */}

                        <SizedBox height={8} />

                        <Text style={styles.subtitle}>Forgot Password?</Text>


                        
                        <Pressable onPress={() => emailInput.current?.focus()}>
                            <View style={styles.form}>
                                <Text style={styles.label}>Email</Text>

                                <Controller
                                    control={control}
                                    name="password"
                                    render={({ onBlur, onChange, value }) => (
                                        <TextInput
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            onSubmitEditing={onSubmit}
                                            ref={passwordInput}
                                            returnKeyType="done"
                                            secureTextEntry
                                            style={styles.textInput}
                                            textContentType="password"
                                            value={value}
                                        />
                                    )}
                                />
                            </View>
                        </Pressable>
                        

                        <SizedBox height={16} />
                       

                        <SizedBox height={16} />

                        {/* <Button onPress={()=> console.log('Button Clicked')} title='Login'> </Button>                */}

                        <TouchableOpacity onPress={onSubmit}>
                            <View style={styles.button}>
                                <Text style={styles.buttonTitle}>Continue</Text>
                            </View>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Login;