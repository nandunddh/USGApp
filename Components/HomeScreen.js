import { View, Text, Button, SafeAreaView, Image, FlatList, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from '@react-navigation/native'
// import Program from "./Program"
import axios from 'axios'
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const spreadsheetId =
    'https://docs.google.com/spreadsheets/d/13dC1M4SvysyiAogGLQDqYn7IIqbKW_zEKMmBQWFCjJI/edit?usp=sharing'
  const range = 'Sheet1!D' // Assuming the URLs are in column A and other data is in column B
  const apiKey = 'AIzaSyDIpd5CY4qApQ5t_azRPvLPr26gqTiC3HA'

  // const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=a7FYq6zdJBrB5643gSkJ1Gh9mp5IZ7t4v4H6ygtqnIcEA71j5Mk6Vj-RM2hhn77CTGIP4GfVM6xfeI2AuU4GtaS7Vu4gZe_bm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNTpQVOAbO-e10yb5OVf8CJ7SmGZ8jMlfFJnq_VLyDQWB7v3I7vju9c26-ZAB7tm5uQgsUUI_iGq8CtNOIae6bpBAcIoptOhrdz9Jw9Md8uu&lib=MELw67nwW2E5sw1H-VB-MPMWQ4spgb1DD';
  const url =
    'https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}'
  const [Plenary, setPlenary] = useState([])
  const [Keynote, setKeynote] = useState([])
  const [Oral, setOral] = useState([])
  const [Sessions, setSessions] = useState([])
  const popular_conferences = [
    {
      image: require("../assets/popularimage.jpg"),
      title: "INTERNATIONAL CONFERENCE ON \nNextGen Solar",
      title1: 'NextGen Solar',
      name: "SUN-2023",
      date: "OCTOBER 30-31, 2023",
      venu: "SAN FRANCISCO, CA",
      url: "https://solarenergymeet.com",
    },
    {
      image: require("../assets/popularimage.jpg"),
    },
    {
      image: require("../assets/popularimage.jpg"),
    },
    {
      image: require("../assets/popularimage.jpg"),
    },
    {
      image: require("../assets/popularimage.jpg"),
    },
    {
      image: require("../assets/popularimage.jpg"),
    },
  ]

  useEffect(() => {
    // fetchData()
  }, [Plenary, Keynote, Oral]);

  const HandleUrl = ({ item }) => {
    const handpleUrlPress = () => {
      const url = `${item.url}`;
      Linking.openURL(url);
    }
    return (
      <View style={{ borderWidth: 10, borderColor: "#fff", borderRadius: 15, backgroundColor: "#fff", marginHorizontal: 10, }}>
        <Image source={item.image} style={{ borderRadius: 15, width: "auto" }} />
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{item.name}</Text>
        <Text style={{ fontSize: 15, fontWeight: "600", textAlign: 'center', color: "#f66b10" }}>{item.title1}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 12 }}>
          <Fontisto name="date" size={16} color="#f66b10" />
          <Text style={{ fontSize: 12, fontWeight: "600", marginHorizontal: 10, }}>{item.date}</Text>
          <EvilIcons name="location" size={18} color="#f66b10" />
          <Text style={{ fontSize: 12, fontWeight: "600" }}>{item.venu}</Text>
        </View>
        <View>
          <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 12, paddingHorizontal: 20 }} onPress={handpleUrlPress}>
              <Text style={{ color: "#fff", textAlign: "center" }}> Register Now </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 12, paddingHorizontal: 10 }} onPress={handpleUrlPress}>
              <Text style={{ color: "#fff", textAlign: "center" }}> Submit Abstract </Text>
            </TouchableOpacity>
            {/* <Button title='SIGN IN' color="#000" /> */}
          </View>
          <View>
            {/* <Text style={{ textAlign: "center" }}>Register Now</Text> */}
          </View>
        </View>
      </View>
    )
  }

  const fetchData = async () => {
    try {
      const response = await axios
        .get(
          // 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVu4gn6Sgp-0VbKUWrpxDd5wVKc96DpiMdAgNx1XBQxcWXz9naPQDML3lIj7CQM71KGFmlL4qHY75d/pubhtml'
          // https://script.google.com/macros/s/AKfycbwkBUU1UZyAq9M1LDOurgTF9983YPPXhz_TZA8G3ADofjRA538vD4MGaF3DIJxUZQb-Yw/exec
          // 'https://sheets.googleapis.com/v4/spreadsheets/YOUR_SPREADSHEET_ID/values/YOUR_RANGE?key=YOUR_API_KEY'
          'https://script.googleusercontent.com/macros/echo?user_content_key=a7FYq6zdJBrB5643gSkJ1Gh9mp5IZ7t4v4H6ygtqnIcEA71j5Mk6Vj-RM2hhn77CTGIP4GfVM6xfeI2AuU4GtaS7Vu4gZe_bm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNTpQVOAbO-e10yb5OVf8CJ7SmGZ8jMlfFJnq_VLyDQWB7v3I7vju9c26-ZAB7tm5uQgsUUI_iGq8CtNOIae6bpBAcIoptOhrdz9Jw9Md8uu&lib=MELw67nwW2E5sw1H-VB-MPMWQ4spgb1DD',
        )
        .then((response) => {
          // console.log('setSessions', response.data)
          setPlenary(response.data.data)
          setKeynote(response.data.output2)
          setOral(response.data.output3)
          setSessions(response.data.output4)
        })
    } catch (error) {
      console.error('Error fetching sheet data:', error)
    }
  }

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#373a43", paddingHorizontal: 25, flexDirection: "row", justifyContent: "space-between", height: 120, marginTop: 1, paddingTop: 10 }}>
        <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>October 2023 Conferences</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CurrentConferences")}>
          <Text style={{ textAlign: "right", color: "red" }}> View all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: -60, flexDirection: "row", marginLeft: 10, marginBottom: 30 }}>
        <FlatList
          data={popular_conferences}
          renderItem={({ item }) =>
            <HandleUrl item={item} />
          }
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={styles.header2}>All Conferences</Text>
      </View>
      <View>
        {/* <Text>HomeScreen</Text> */}
        <Button
          title="Program"
          onPress={() =>
            navigation.navigate('Program', {
              Plenary: Plenary,
              Keynote: Keynote,
              Oral: Oral,
              Sessions: Sessions,
            })
          }
        />
        {/* <Link to={{ screen: 'Program' }}>Program</Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  header2: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: "bold", 
    marginBottom: 20,
  }
})