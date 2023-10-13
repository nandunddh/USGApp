import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
// import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';


const ConferenceScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  console.log("Screen === ", route);
  const [name, setName] = useState(route.params.name);
  const [title, setTitle] = useState(route.params.title);
  const [image, setImage] = useState(route.params.image);
  const [venu, setVenu] = useState(route.params.venu);
  const [date, setDate] = useState(route.params.date);
  const [logo, setLogo] = useState(route.params.logo);
  const [aboutShort, setAboutShort] = useState(route.params.aboutshort);
  const [about, setAbout] = useState(route.params.about);
  const [hotelAddress, setHotelAddress] = useState(route.params.hotelAddress);
  const [url, setUrl] = useState(route.params.url);

  return (
    <SafeAreaProvider style={{ paddingTop: insets.top }}>
      <ScrollView>
        <View>
          <View>
            <Image source={image} style={Styles.image} />
          </View>
          <View style={{ backgroundColor: "#fff", top: 8 }}>
            <View style={{ paddingHorizontal: 10, }}>
              <View style={{ paddingVertical: 10, marginBottom: 10 }}>
                <Text style={Styles.heading}>{name}</Text>
                <Text style={Styles.title}>{title}</Text>
              </View>
              <View style={{ paddingHorizontal: 10, borderTopWidth: 1, borderStyle: "dashed", paddingVertical: 10 }}>
                <View style={Styles.iconText}>
                  <MaterialCommunityIcons name="account-outline" size={25} color="#a6a3a3" style={[Styles.icon, { marginRight: 2, marginStart: 5 }]} />
                  <Text style={{ fontSize: 15 }}>By <Text style={Styles.boldtext}>United Scientific Group</Text></Text>
                </View>
                <View style={Styles.iconText}>
                  <EvilIcons name="location" size={30} color="#a6a3a3" style={Styles.icon} />
                  <Text style={Styles.boldtext}>{venu}</Text>
                </View>
                <View style={Styles.iconText}>
                  <Fontisto name="date" size={20} color="#a6a3a3" style={[Styles.icon, { marginRight: 5, marginLeft: 5 }]} />
                  <Text style={Styles.boldtextDate}>{date}</Text>
                </View>
                <View style={Styles.iconText}>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo name="ticket" size={25} color="#a6a3a3" style={[Styles.icon, { marginRight: 2, marginStart: 5 }]} />
                    <Text style={{ fontSize: 15 }}>From <Text style={Styles.boldtextDate}>${100}</Text></Text>
                  </View>
                </View>
                <View style={{ backgroundColor: "#393c45", marginHorizontal: 80, borderRadius: 5 }}>
                  <Text style={{ textAlign: "center", color: "#fff", paddingVertical: 10, fontSize: 20, fontWeight: "bold" }} onPress={() => Linking.openURL(url)}>Register Now</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={{ backgroundColor: "#fff", marginVertical: 20, paddingHorizontal: 35, paddingBottom: 20 }}>
              <View style={{ paddingVertical: 20, borderBottomWidth: 1, borderStyle: "dotted" }}>
                <Text style={Styles.aboutText}>About Conference</Text>
              </View>
              <View>
                <Text style={{ lineHeight: 20, marginTop: 15, fontSize: 15, textAlign: "justify" }}>{aboutShort}</Text>
                <Text style={{ marginTop: 5, fontSize: 15, fontWeight: "bold", color: "#f66b10", textTransform: "capitalize", textDecorationLine: "underline" }} onPress={() => {
                  navigation.navigate("About Conference", {
                    about: about
                  })
                }}>Read more</Text>
              </View>
            </View>
            <View style={{ backgroundColor: "#fff", paddingHorizontal: 35, paddingBottom: 20 }}>
              <View style={{ paddingVertical: 20, borderBottomWidth: 1, borderStyle: "dotted" }}>
                <Text style={Styles.aboutText}>Location</Text>
              </View>
              <View style={{ height: 250, paddingBottom: 30 }}>
                <Text style={{ lineHeight: 22, marginVertical: 10, fontSize: 16, fontWeight: "400" }}>{hotelAddress}</Text>
                {/* <MapView style={Styles.map}
                  initialRegion={{
                    latitude: 42.34616716969697,
                    longitude: -71.25787434479032,
                    latitudeDelta: 0.0,
                    longitudeDelta: 0.08,
                  }} /> */}
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: "#fff", marginVertical: 20, paddingHorizontal: 35, paddingBottom: 20 }}>
            <View style={{ paddingVertical: 20, borderBottomWidth: 1, borderStyle: "dotted" }}>
              <Text style={Styles.aboutText}>Organizer</Text>
            </View>
            <View style={{ flexDirection: "column", marginTop: 15, }}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Image source={require("../../assets/usgfivicon.png")} />
                </View>
                <View style={{ flexDirection: "column", paddingHorizontal: 15 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>United Scientific Group</Text>
                  <Text>A Non-Profit Organization</Text>
                </View>
              </View>
              <View style={{ marginTop: 10, flexDirection: "row" }}>
                <EvilIcons name="location" size={30} color="black" style={Styles.icon} />
                <Text style={{fontSize: 16, lineHeight: 23}}>
                  USG United Scientific Group {"\n"}
                  A non-profit organization {"\n"}
                  8105, Suite 112, Rasor Blvd {"\n"}
                  PLANO, TX 75024
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 10, paddingHorizontal: 20 }}>
                <View style={{ paddingHorizontal: 20, backgroundColor: "#3d6cf4", paddingVertical: 7, marginRight: 10, flexDirection: "row", borderRadius: 5 }}>
                  <MaterialCommunityIcons name="email" size={24} color="white" style={{ paddingRight: 7 }} />
                  <Text style={{ color: "#fff", fontSize: 18, }} onPress={()=>Linking.openURL("mailto:contact@unitedscientificgroup.net")}>Email</Text>
                </View>
                <View style={{ paddingHorizontal: 20, backgroundColor: "#10b384", paddingVertical: 7, marginRight: 10, flexDirection: "row", borderRadius: 5 }}>
                  <Ionicons name="md-call-outline" size={24} color="white" style={{ paddingRight: 7 }} />
                  <Text style={{ color: "#fff", fontSize: 18, }} onPress={()=>Linking.openURL("tel:+1-4698542280")}>Phone</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default ConferenceScreen

const Styles = StyleSheet.create({
  image: {
    width: "auto",
    height: 270,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  icon: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  iconText: {
    marginVertical: 10,
    flexDirection: "row"
  },
  boldtext: {
    fontWeight: "bold",
    fontSize: 15,
    // textTransform: "capitalize"
  },
  boldtextDate: {
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "capitalize"
  },
  aboutText: {
    // textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
    paddingVertical: 10
  },
})