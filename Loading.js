import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MyContext from "./Components/MyContext";
import * as SecureStore from "expo-secure-store";
import AnimatedLoader from "react-native-animated-loader";

const Loading = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const {
    isLogin,
    setStoredCredentials,
    storedCredentials,
    user_name,
    setIsLogin,
  } = useContext(MyContext);

  useEffect(() => {
    getStoredCredentials();
    setInterval(() => {
      setVisible(!visible);
    }, 50000);
  }, [isLogin, storedCredentials, user_name, isLogin]);

  const getStoredCredentials = async () => {
    try {
      const storedEmail = await SecureStore.getItemAsync("email");
      const storedPassword = await SecureStore.getItemAsync("password");
      const username = await SecureStore.getItemAsync("username");
      if (storedEmail && storedPassword) {
        // alert(username + " username");
        await setStoredCredentials({
          email: storedEmail,
          password: storedPassword,
          username: username,
        });
        if (storedEmail === "admin@test.com") {
          navigation.navigate("HomeScreen");
          navigation.navigate("AdminTab", {
            screen: "HomeScreen",
          });
        } else {
          navigation.navigate("UserTab", {
            screen: "HomeScreen",
          });
        }

        setIsLogin(true);
        console.log("Stored Credentials Login Screen:", {
          email: storedEmail,
          password: storedPassword,
        });
      } else {
        console.log("No credentials found.");
      }
    } catch (error) {
      console.error("Error retrieving credentials:", error);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "red" }}>Doing something...</Text>
    </View>
    // <AnimatedLoader
    //   visible={visible}
    //   overlayColor="rgba(255,255,255,0.75)"
    //   animationStyle={styles.lottie}
    //   speed={10}>
    //   <Text>Doing something...</Text>
    // </AnimatedLoader>
  );
};

export default Loading;
