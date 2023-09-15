import {Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'
import { Image } from 'react-native'
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const About = () => {
  return (
    <View>
      <ScrollView>
        <View style={{ backgroundColor: "#fff", paddingVertical: 10, height: "100%" }}>
          <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>About USG</Text>
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../assets/logo.png')} />
            <View style={{ marginHorizontal: 15, }}>
              <Text style={{ fontSize: 18, textAlign: "justify", lineHeight: 25 }}>
                <Text style={{ fontWeight: "bold" }}>United Scientific Group (USG)</Text> is a scientific event organizer and publisher founded in 2014 in San Jose, CA. In 2016, it relocated to Plano, TX. USG is known for organizing national and international scientific conferences with participant numbers ranging from 50 to 350. It holds tax-exempt status under Section 501c3 of the Internal Revenue Service in the United States.
                {"\n"}
              </Text>
              <Text style={{ fontSize: 18, textAlign: "justify", lineHeight: 25 }}>
                USG's primary goal is to establish scientific networking platforms through conferences. These platforms aim to bridge the gap between research and business, facilitating the translation of scientific discoveries and innovative ideas into practical solutions and products for the betterment of humanity.
                {"\n"}
              </Text>
              <Text style={{ fontSize: 18, textAlign: "justify", lineHeight: 25 }}>
                USG is governed by a board of directors comprising renowned scientists. Their dedication lies in supporting the scientific community by providing exceptional services in organizing scientific conferences and open access scientific publications.
              </Text>
            </View>
          </View>
          {/* <View style={{ marginVertical: 10, marginHorizontal: 10, backgroundColor: "green", alignItems: "stretch", flexDirection: "row"}}>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <MaterialIcons name="keyboard-voice" size={24} color="white" />
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", paddingLeft: 5, justifyContent: "flex-end", textAlign: "right" }}>
                CONFERENCES
              </Text>

            </View>
            <View style={{ justifyContent: "center", flexDirection: "row", }}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", justifyContent: "flex-end" }}>79</Text>
            </View>
          </View> */}
          <View style={{ marginVertical: 10, marginHorizontal: 10, backgroundColor: "#86bc42", }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", padding: 10, justifyContent: "flex-end" }}>
                <MaterialIcons name="keyboard-voice" size={45} color="white" />
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", paddingLeft: 5, }}>
                    CONFERENCES
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 15, paddingLeft: 5, justifyContent: "flex-end", textAlign: "right" }}>
                    By Our Experienced Team
                  </Text>
                </View>

              </View>
              <View style={{ padding: 10, justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", justifyContent: "flex-end" }}>79</Text>
              </View>
            </View>
            <View style={{ borderWidth: 1, marginHorizontal: 30, borderColor: "#ffffff1a" }}>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", padding: 10, justifyContent: "flex-end" }}>
                <MaterialCommunityIcons name="account-outline" size={45} color="white" />
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", paddingLeft: 5, }}>
                    SPEAKERS
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 15, paddingLeft: 5, justifyContent: "flex-end", textAlign: "right" }}>
                    Keynotes, Featured Speakers
                  </Text>
                </View>
              </View>
              <View style={{ padding: 10, justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", justifyContent: "flex-end" }}>3547</Text>
              </View>
            </View>
            <View style={{ borderWidth: 1, marginHorizontal: 30, borderColor: "#ffffff1a" }}>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", padding: 10, justifyContent: "flex-end" }}>
                <MaterialCommunityIcons name="briefcase-outline" size={45} color="white" />
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", paddingLeft: 5, }}>
                    PARTNERS
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 15, paddingLeft: 5, justifyContent: "flex-end", textAlign: "right" }}>
                    We Provides All Industry Services
                  </Text>
                </View>

              </View>
              <View style={{ padding: 10, justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", justifyContent: "flex-end" }}>56</Text>
              </View>
            </View>
            <View style={{ borderWidth: 1, marginHorizontal: 30, borderColor: "#ffffff1a" }}>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", padding: 10, justifyContent: "flex-end" }}>
                <SimpleLineIcons name="globe-alt" size={45} color="white" />
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", paddingLeft: 5, }}>
                    COUNTRIES
                  </Text>
                  <Text style={{ color: "#fff", fontSize: 15, paddingLeft: 5, justifyContent: "flex-end", textAlign: "right" }}>
                    We are in All Continents
                  </Text>
                </View>

              </View>
              <View style={{ padding: 10, justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", justifyContent: "flex-end" }}>75</Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: "#373a43", borderTopLeftRadius: 40, borderTopEndRadius: 40, }}>
            <View>
              <View style={{ borderTopWidth: 5, borderColor: "#fff", marginTop: 12, height: 1, marginHorizontal: 150, borderRadius: 50 }}>
                {/* <Text>-------------</Text> */}
              </View>
            </View>
            <View style={{ backgroundColor: "#373a43", flexDirection: "row", paddingVertical: 20, paddingHorizontal: 10, justifyContent: "space-evenly", borderTopLeftRadius: 40, borderTopEndRadius: 40, }}>

              <View style={{ backgroundColor: "#f66b10", borderRadius: 60, paddingHorizontal: 5 }}>
                <Zocial name="call" size={45} color="white" onPress={() => { Linking.openURL(`tel:+1-469-854-2280/81`) }} />
              </View>
              <View style={{ backgroundColor: "#fbbf47", borderRadius: 60, padding: 5 }}>
                <MaterialCommunityIcons name="email-outline" size={48} color="white" onPress={() => { Linking.openURL(`mailto:contact@unitedscientificgroup.net`) }} />
              </View>
              <View style={{ backgroundColor: "#3f82f7", borderRadius: 60, padding: 5 }}>
                {/* <MaterialCommunityIcons name="directions" size={50} color="white" /> */}
                <FontAwesome5 name="globe" size={45} color="white" onPress={() => { Linking.openURL("https://unitedscientificgroup.org") }} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default About