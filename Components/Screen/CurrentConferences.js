import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const CurrentConferences = () => {
  const popular_conferences = [
    {
      image: require("../../assets/dental.jpg"),
      title: "INTERNATIONAL CONFERENCE ON \nDental Science & Research",
      title1: 'DENTAL SCIENCE & RESEARCH',
      name: "DSR-2023",
      date: "OCTOBER 23-25, 2023",
      venu: "VIRTUAL",
      url: "https://dentistry-conference.com",
    },
    {
      image: require("../../assets/ccm-banner.jpg"),
      title: "3rd International Conference on \nCarbon Chemistry and Materials",
      title1: 'Carbon Chemistry and Materials',
      name: "CCM-2023",
      date: "OCTOBER 23-27, 2023",
      venu: "Paris, France(Hybrid)",
      url: "https://carbon.unitedscientificgroup.org",
    },
    {
      image: require("../../assets/ren-banner.jpg"),
      title: "3rd International Conference on \nCarbon Chemistry and Materials",
      title1: 'Renewable Energy Conference 2023',
      name: "REN-2023",
      date: "OCTOBER 23-25, 2023",
      venu: "Paris, France",
      url: "https://renewablemeeting.com/",
    },
    {
      image: require("../../assets/sun-banner.jpg"),
      title: "INTERNATIONAL CONFERENCE ON \nNextGen Solar",
      title1: 'NextGen Solar',
      name: "SUN-2023",
      date: "OCTOBER 30-31, 2023",
      venu: "SAN FRANCISCO, CA",
      url: "https://solarenergymeet.com",
    },
  ]
  const HandleUrl = ({ item }) => {
    const handpleUrlPress = () => {
      const url = `${item.url}`;
      Linking.openURL(url);
    }
    return (
      <View style={{ borderWidth: 10, borderColor: "#fff", borderRadius: 15, backgroundColor: "#fff", marginVertical: 10, }}>
        <Image source={item.image} style={{ borderRadius: 15, width: "100%", height: 230}} />
        <View style={{ paddingHorizontal: 10, borderColor: "#000", flex: 1, }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{item.name}</Text>
          <Text style={{ fontSize: 15, fontWeight: "600", textAlign: 'center', color: "#f66b10" }}>{item.title1}</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 12 }}>
            <Fontisto name="date" size={16} color="#f66b10" />
            <Text style={{ fontSize: 12, fontWeight: "600", marginHorizontal: 10, }}>{item.date}</Text>
            <EvilIcons name="location" size={18} color="#f66b10" />
            <Text style={{ fontSize: 12, fontWeight: "600" }}>{item.venu}</Text>
          </View>
        </View>
        <View>
          <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 12, paddingHorizontal: 20 }} onPress={handpleUrlPress}>
              <Text style={{ color: "#fff", textAlign: "center" }}> Register Now </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 12, paddingHorizontal: 10 }} onPress={handpleUrlPress}>
              <Text style={{ color: "#fff", textAlign: "center" }}> Submit Abstract </Text>
            </TouchableOpacity>
            <Button title='SIGN IN' color="#000" />
          </View>
          <View>
            {/* <Text style={{ textAlign: "center" }}>Register Now</Text> */}
          </View>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <View>
        <FlatList
          data={popular_conferences}
          renderItem={({ item }) =>
            <HandleUrl item={item} />
          }
          // horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaProvider>
  )
}

export default CurrentConferences


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})