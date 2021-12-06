import React, { useState } from "react";
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
} from "react-native";
import Home from "./Home";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { Controller, useForm } from "react-hook-form";
import authAPI from "../api/auth";

const SizedBox = ({ height, width }) => {
  return <View style={{ height, width }} />;
};

function useStyles() {
  return StyleSheet.create({
    button: {
      alignItems: "center",
      // backgroundColor: '#8bc34a',
      backgroundColor: "#7B0F52",
      borderRadius: 8,
      height: 48,
      justifyContent: "center",
    },
    buttonTitle: {
      color: "#FFFFFF",
      fontSize: 17,
      fontWeight: "600",
      lineHeight: 22,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    actionContainer: {
      alignItems: "flex-end",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    form: {
      alignItems: "center",
      backgroundColor: "rgb(58, 58, 60)",
      borderRadius: 8,
      flexDirection: "row",
      height: 48,
      paddingHorizontal: 16,
      marginTop: 20,
    },
    label: {
      color: "rgba(235, 235, 245, 0.6)",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
      width: 80,
    },
    root: {
      backgroundColor: "#fff",
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    subtitle: {
      color: "#888",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 22,
      alignSelf: "baseline",
      marginLeft: 10,
    },
    textButton: {
      color: "#000",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
    },
    textInput: {
      color: "#fff",
      flex: 1,
    },

    title: {
      color: "#000",
      fontSize: 24,
      fontWeight: "700",
      lineHeight: 34,
      alignSelf: "center",
    },
    tinyLogo: {
      width: "100%",
      height: "100%",
      // margin: 'auto',
      alignItems: "center",
      marginLeft: 50,
      borderRadius: 20,
    },
  });
}

// function storeHighScore(score) {
//   const db = getDatabase();
//   const reference = ref(db, "data");
//   // set(reference, {
//   //   "zzz": score,
//   // });
//   push(reference, { user: "sd" });
// }

const Login = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // Alert.alert('Data', `Email: ${email}\nPassword: ${password}`);
    console.log("berhasil login");
    // setlogin(true);
    // navigation.navigate("Login")
    // storeHighScore(9999);
    authAPI.register({ nama, nohp, email, password }).then((res) => {
      if (!res.success) {
        Alert.alert("Gagal melakukan pendaftaran");
        return;
      }
      Alert.alert("Pendaftaran Sukses, Silahkan coba login");
      navigation.navigate("Login");
      console.log(res);
    });
  };

  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.content}
          >
            <View
              style={{
                width: 300,
                height: 150,
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Image
                source={require("../../assets/Picture1.png")}
                style={styles.tinyLogo}
              />
            </View>
            {/* <Text style={styles.title}>Welcome To Agri Golden Mart!</Text> */}

            <SizedBox height={8} />

            <Text style={styles.subtitle}>Sign UP!</Text>

            <Pressable>
              <View style={styles.form}>
                <Text style={styles.label}>Nama</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={(val) => setNama(val)}
                  returnKeyType="next"
                  style={styles.textInput}
                  textContentType="username"
                  value={nama}
                />
              </View>
            </Pressable>

            <Pressable>
              <View style={styles.form}>
                <Text style={styles.label}>No HP</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(val) => setNohp(val)}
                  returnKeyType="next"
                  style={styles.textInput}
                  textContentType="text"
                  value={nohp}
                />
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(val) => setEmail(val)}
                  returnKeyType="next"
                  keyboardType="email-address"
                  style={styles.textInput}
                  textContentType="email"
                  value={email}
                />
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.form}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCompleteType="password"
                  autoCorrect={false}
                  onChangeText={(val) => setPassword(val)}
                  returnKeyType="done"
                  secureTextEntry
                  style={styles.textInput}
                  textContentType="password"
                  value={password}
                />
              </View>
            </Pressable>

            <SizedBox height={16} />

            <SizedBox height={16} />

            {/* <Button onPress={()=> console.log('Button Clicked')} title='Login'> </Button>                */}

            <TouchableOpacity onPress={onSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>Register</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
