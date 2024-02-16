import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import MyContext from '../MyContext'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native-elements';

const Profile = () => {
  const { user_name } = useContext(MyContext);
  const navigation = useNavigation();
  const { isLogin, setIsLogin, isAdmin, setIsAdmin, setStoredCredentials, storedCredentials } = useContext(MyContext);

  const clearCredentials = async () => {
    try {
      alert("Logout");
      await SecureStore.deleteItemAsync('email');
      await SecureStore.deleteItemAsync('password');

      // Clear stored credentials in state
      setStoredCredentials(null);

      // Navigate to the 'Sign_in' page
      navigation.navigate('Sign_in');

      console.log('Credentials cleared (logged out) successfully.');
    } catch (error) {
      console.error('Error clearing credentials:', error);
    }
  }
  return (

    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profile_container}>
            <Image source={require("../../assets/ccm-banner.jpg")} style={styles.profile_image} />
            {user_name ?
              <Text>{user_name}</Text>
              :
              <Text style={styles.profile_name}>P.NanduKumar Goud</Text>
            }
          </View>
          <View style={styles.inner_container}>
            <View style={{ flex: 2 }}>
              <View style={{ padding: 20 }}>
                <Text style={styles.subheading}>Email</Text>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons name="email-outline" size={30} color="#f3ba2d" style={styles.email_icon} />
                  <Text style={styles.sub_text}>nandu@test.com</Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#86bc42',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
              <View style={{ padding: 20 }}>
                <Text style={styles.subheading}>Mobile Number</Text>
                <View style={{ flexDirection: "row" }}>
                  <Feather name="phone" size={30} color="#f3ba2d" style={styles.email_icon} />
                  <Text style={styles.sub_text}>+91 1010101010</Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#86bc42',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
              <View style={{ padding: 20 }}>
                <Text style={styles.subheading}>Location</Text>
                <View style={{ flexDirection: "row" }}>
                  <Entypo name="location-pin" size={30} color="#f3ba2d" style={styles.email_icon} />
                  {/* <EvilIcons name="location" size={24} color="black" style={styles.email_icon} /> */}
                  <Text style={styles.sub_text}>Hyderabad, TS, India</Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#86bc42',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
            </View>
            <View style={{ marginTop: 25, marginBottom: 40 }}>
              <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 22 }} onPress={() => navigation.navigate("Edit_Profile")}>
                <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}> Edit Details </Text>
              </TouchableOpacity>
              {/* <Button title='SIGN IN' color="#000" /> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default Profile


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner_container: {
    paddingHorizontal: 20,
    flex: 1
  },
  profile_container: {
    alignItems: "center",
    paddingVertical: 30,
    // backgroundColor: "#373a43",
    // borderBottomLeftRadius: 35,
    // borderBottomRightRadius: 35,
    // borderTopRightRadius: 35,
    // borderTopLeftRadius: 35,
  },
  profile_image: {
    borderRadius: 80,
    height: 150,
    width: 150,
    marginBottom: 15,
    // borderColor: "#000",
    borderWidth: 2
  },
  profile_name: {
    fontSize: 20,
    fontWeight: "bold",
    // color: "#fff"
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  email_icon: {
    marginRight: 15,
    alignSelf: "center",
    justifyContent: "flex-end"
  },
  sub_text: {
    alignSelf: "center",
    fontSize: 18
  }
})