import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import MyContext from '../MyContext';
import { Avatar, Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const EditProfile = () => {
  const { user_name } = useContext(MyContext);
  const navigation =  useNavigation();

  return (
    <>
      <Header
       backgroundColor="#373a43"
        leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigation.goBack()}}
        centerComponent={{ text: 'Edit Profile', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      >
      </Header>
      <View style={styles.container}>
        <View style={styles.profile_container}>
          <Avatar
            source={require("../../assets/ccm-banner.jpg")}
            rounded
            size="xlarge"
            style={styles.profile_image}
            showEditButton
          />
          {/* <Image source={require("../../assets/ccm-banner.jpg")} style={styles.profile_image} /> */}
          {user_name ?
            <Text>{user_name}</Text>
            :
            <Text style={styles.profile_name}>P.NanduKumar Goud</Text>
          }
        </View>
      </View>
    </>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
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
    height: 150,
    width: 150,
    marginBottom: 15,
    // borderColor: "#000",
    // borderWidth: 2
  },
  profile_name: {
    fontSize: 20,
    fontWeight: "bold",
    // color: "#fff"
  },
})