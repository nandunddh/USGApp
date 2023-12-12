import * as React from 'react';
import { Linking, Text } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';


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
const FirstRoute = () => (
  <ScrollView>
    <View>
      <View style={{ marginTop: 10 }}>
        {notificationDesc && notificationDesc.map((notificationDesc, index) => {
          return (
            <View style={styles.notificationcontainer} key={index}>
              <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                <View style={{ paddingHorizontal: 10, alignItems: "center", flexDirection: "column" }}>
                  <Text style={{ fontWeight: "normal", fontSize: 17, marginTop: 4, }}>{notificationDesc.month}</Text>
                  <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 4, color: "#f66b10" }}>{notificationDesc.date}</Text>
                </View>
                <View style={{ flexDirection: "column", paddingLeft: 5 }}>
                  <Text style={{ fontWeight: "600", fontSize: 18 }}>{notificationDesc.name}
                  </Text>
                  <Text style={{ fontWeight: "normal", fontSize: 16 }}>{notificationDesc.venu}</Text>
                </View>
              </View>
              <View style={{ borderTopWidth: 1, flexDirection: "row", flex: 1, borderColor: "#bfbfbf" }}>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 16 }}> <Entypo name="ticket" size={18} color="black" /> From <Text style={{ fontWeight: "bold", fontSize: 18, }}>$200</Text></Text>
                </View>
                <View style={{ flex: 1, borderLeftWidth: 1, paddingHorizontal: 10, paddingBottom: 5, borderColor: "#bfbfbf" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center", color: "#fff", backgroundColor: "#363942", paddingVertical: 10, marginTop: 5, borderRadius: 5 }} onPress={() => { Linking.openURL(`${notificationDesc.url}`) }}>Register Now</Text>
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView>
    <View>
      <View style={{ marginTop: 10 }}>
        {notificationDesc && notificationDesc.map((notificationDesc, index) => {
          return (
            <View style={styles.notificationcontainer} key={index}>
              <View style={{ flexDirection: "row", }}>
                <View style={{ paddingLeft: 5, paddingRight: 10, textAlign: "left" }}>
                  <Image source={notificationDesc.image} />
                </View>

                <Text style={{ fontWeight: "600", fontSize: 17 }}>{notificationDesc.name} {"\n"}
                  <View>
                    <Text style={{ fontWeight: "normal", fontSize: 13, marginTop: 4, }}>{notificationDesc.date}
                      <Text style={{ color: "#f66b10", fontSize: 15, fontWeight: "bold" }}> | </Text>
                      <Text style={{ paddingLeft: 13 }}>{notificationDesc.venu}</Text>
                    </Text>
                  </View>
                </Text>
              </View>
              <View style={{ alignItems: "end", borderLeftWidth: 1, paddingLeft: 5, textAlign: "right" }}>
                {/* <Text>10 53 pm</Text> */}
                <Text style={{ marginBottom: 5, fontWeight: "bold", color: "#f66b10", fontSize: 14, textAlign: "center" }}>$200</Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }} onPress={() => { Linking.openURL(`${notificationDesc.url}`) }}>Join Now</Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  </ScrollView>
);

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
  3: FirstRoute,
  4: SecondRoute,
  5: FirstRoute,
  6: FirstRoute,
  7: SecondRoute,
  8: FirstRoute,
  9: SecondRoute,
  10: FirstRoute,
});

export default function TabViewExample() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'First' },
    { key: '2', title: 'Second' },
    { key: '3', title: 'First' },
    { key: '4', title: 'Second' },
    { key: '5', title: 'First' },
    // { key: '6', title: 'First' },
    // { key: '7', title: 'Second' },
    // { key: '8', title: 'First' },
    // { key: '9', title: 'Second' },
    // { key: '10', title: 'First' },
  ]);

  <TabBar
    renderLabel={({ route, color }) => (
      <Text style={{ color: 'black', margin: 10, fontSize: 30, fontWeight: "bold" }}>
        {/* {route.title} */}
      </Text>
    )}
    style={{ borderRadius: 50 }}
  />

  return (
    <ScrollView>
      <View style={{ height: 1110 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width, }}
          // style={{ backgroundColor: "#f66b10" }}
          renderTabBar={props => <TabBar {...props} style={{ backgroundColor: '#f66b10', borderRadius: 50, borderColor: "#fff" }} />}
        />
      </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  notificationcontainer: {
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