import * as React from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import MyContext from '../MyContext';
import { useContext } from 'react';



const notificationDesc = [
  {
    name: "CCE-2024",
    month: "Feb",
    date: "26-28",
    venu: "Boston, MA",
    image: require("../../assets/favicon.png"),
    url: "https://catalysis.unitedscientificgroup.org/"
  },
  {
    name: "Pharma R&D-2024",
    month: "Feb",
    date: "26-28",
    venu: "Boston, MA",
    image: require("../../assets/favicon.png"),
    url: "https://pharma-rnd.com/"
  },
  {
    name: "GEM-2024",
    month: "Mar",
    date: "04-06",
    venu: "Los Angeles, CA",
    image: require("../../assets/favicon.png"),
    url: "https://globalenergymeet.com/"
  },
  {
    name: "Ensure-2024",
    month: "Mar",
    date: "11-13",
    venu: "Boston, MA",
    image: require("../../assets/favicon.png"),
    url: "https://wasteandrecycling.org/"
  },
  {
    name: "Nursing Science-2024",
    month: "Apr",
    date: "17-19",
    venu: "Los Angeles, CA",
    image: require("../../assets/favicon.png"),
    url: "https://nursing.unitedscientificgroup.org/",
  },
  {
    name: "CEB-2024",
    month: "Apr",
    date: "22-24",
    venu: "Baltimore, MD",
    image: require("../../assets/favicon.png"),
    url: "https://cellexpbiol.unitedscientificgroup.org/"
  },
  {
    name: "NDS-2024",
    month: "May",
    date: "06-08",
    venu: "Barcelona, Spain",
    image: require("../../assets/favicon.png"),
    url: "https://neurodisordersconference.com/"
  },
]


const ConferencesList = () => {

  const { isAdmin, isLogin, ConferenceData, setConferenceData } = useContext(MyContext);

  const [month, setMonth] = React.useState("February");

  const seenMonths = new Set();

  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 10 }}>
        {/* <ConferencesList /> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ConferenceData.map((item, index) => {

            if (!seenMonths.has(item.month)) {
              seenMonths.add(item.month);
              return (
                <View key={index} style={[item.month == month ? { backgroundColor: '#f66b10', borderRadius: 10, borderColor: "#fff", marginHorizontal: 10 } : { backgroundColor: '#fff', borderRadius: 10, borderColor: "#fff", marginHorizontal: 10 }]}>
                  <TouchableOpacity onPress={() => setMonth(item.month)}>
                    <Text style={[item.month === month ? { margin: 10, fontSize: 20, paddingHorizontal: 15, color: '#fff' } : { margin: 10, fontSize: 20, paddingHorizontal: 15, color: "#000" }]}>{item.month}</Text>
                  </TouchableOpacity>
                </View>
              )
            }
            return null;
          })}

        </ScrollView>
        <View style={{ marginTop: 10 }}>
          {ConferenceData && ConferenceData.map((item, index) => {
            if (item.month === month) {
              return (
                <View style={styles.flatlistcontainer} key={index}>
                  <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                    <View style={{ paddingHorizontal: 10, alignItems: "center", flexDirection: "column" }}>
                      <Text style={{ fontWeight: "normal", fontSize: 17, marginTop: 4, }}>{item.month}</Text>
                      <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 4, color: "#f66b10" }}>{item.dates}</Text>
                    </View>
                    <View style={{ flexDirection: "column", paddingLeft: 5 }}>
                      <Text style={{ fontWeight: "600", fontSize: 18 }}>{item.name}
                      </Text>
                      <Text style={{ fontWeight: "normal", fontSize: 16 }}>{item.venu}</Text>
                    </View>
                  </View>
                  <View style={{ borderTopWidth: 1, flexDirection: "row", flex: 1, borderColor: "#bfbfbf" }}>
                    <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                      <Text style={{ fontSize: 16 }}> <Entypo name="ticket" size={18} color="black" /> From <Text style={{ fontWeight: "bold", fontSize: 18, }}>{item.price}</Text></Text>
                    </View>
                    <View style={{ flex: 1, borderLeftWidth: 1, paddingHorizontal: 10, paddingBottom: 5, borderColor: "#bfbfbf" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center", color: "#fff", backgroundColor: "#363942", paddingVertical: 10, marginTop: 5, borderRadius: 5 }} onPress={() => { Linking.openURL(`${item.url}`) }}>Register Now</Text>
                    </View>
                  </View>
                </View>
              )
            }
          })}
        </View>
        {/* <List /> */}
      </View>
    </ScrollView>

  );
}
export default ConferencesList


const styles = StyleSheet.create({
  flatlistcontainer: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 10,
    // paddingHorizontal: 10,
    flexDirection: "column",
    borderRadius: 10,
    justifyContent: "space-between",
    // width: 300,
    // justifyContent: "flex-end",
  },
})