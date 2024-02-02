import { View, Text, SafeAreaView, Image, TouchableOpacity, Linking, StyleSheet, ScrollView, useWindowDimensions, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
// import Program from "./Program"
import axios from 'axios'
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
// import UpComingConferences from './Screen/UpComingConferences';
import { SceneMap, TabView } from 'react-native-tab-view';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ConferencesList from "./Tabs/ConferencesList"
// import { notificationData, popular_conferences, upcomingConferencelist } from './Data/data';
import { popular_conferences } from './Data/data';
import ViewSlider from 'react-native-view-slider';
import MyContext from './MyContext';
import { DB_URL } from './Constants/Constants';

const { width } = Dimensions.get('window');

const WebHomeScreen = ({ navigation }) => {
  const spreadsheetId = 'https://docs.google.com/spreadsheets/d/13dC1M4SvysyiAogGLQDqYn7IIqbKW_zEKMmBQWFCjJI/edit?usp=sharing'
  const range = 'Sheet1!D' // Assuming the URLs are in column A and other data is in column B
  const apiKey = 'AIzaSyDIpd5CY4qApQ5t_azRPvLPr26gqTiC3HA'

  // const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=a7FYq6zdJBrB5643gSkJ1Gh9mp5IZ7t4v4H6ygtqnIcEA71j5Mk6Vj-RM2hhn77CTGIP4GfVM6xfeI2AuU4GtaS7Vu4gZe_bm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNTpQVOAbO-e10yb5OVf8CJ7SmGZ8jMlfFJnq_VLyDQWB7v3I7vju9c26-ZAB7tm5uQgsUUI_iGq8CtNOIae6bpBAcIoptOhrdz9Jw9Md8uu&lib=MELw67nwW2E5sw1H-VB-MPMWQ4spgb1DD';
  const url =
    'https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}'
  const [Plenary, setPlenary] = useState([])
  const [Keynote, setKeynote] = useState([])
  const [program, setProgram] = useState(false)
  const [user, setUsers] = useState()
  const [Oral, setOral] = useState([])
  const [Sessions, setSessions] = useState([])
  const [upcomingConferencelist, setUpcomingConferencelist] = useState([])
  const [month, setMonth] = useState([])
  const [token, setToken] = useState([])
  const popular_conference = popular_conferences;

  const { isAdmin, isLogin } = useContext(MyContext)

  useEffect(() => {
    // fetchDatatest()
    handleupcomingconferencelist()
    console.log("isLogin from Home == ", isLogin)
  }, [Plenary, Keynote, Oral, isAdmin]);

  const handleupcomingconferencelist = async () => {
    try {
      var APIURL = `${DB_URL}GetConferenceDetails.php`;
      // var APIURL = "http://127.0.0.1:8000/USG/login.php";

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      // var Data = {
      //   Email: email,
      //   // isAdmin: isAdmin,
      //   Password: password
      // };

      fetch(APIURL, {
        method: 'GET',
        headers: headers,
        // body: JSON.stringify(Data)
      })
        .then((Response) => Response.json())
        .then((Response) => {
          // console.log("Login ===", Response);
          if (Response[0].Message == "Success") {
            alert(Response[0].Message);
            console.log("Data upcomingconferencelist data Base == ", Response[0].data)
            setUpcomingConferencelist(Response[0].data)
            console.log("Live ==== ", upcomingConferencelist.token);
          }
          else {
            alert(Response[0].Message);
          }
          // if (Response[0].Message == "No Data Found") {
          // console.log("Login true =============")
          // email1.clear();
          // password1.clear();

          // storeCredentials()
          // }
        })
        .catch((error) => {
          console.error("ERROR FOUND" + error);
        })
    } catch (error) {
      alert("Fetch Error!")
    }
  }


  const handpleupcomming = ({ upcomingConference }) => {
    // const screenname = "UpComingConferenceScreen";
    const screenname = "ConferenceScreen";
    const url = `${screenname}`;
    navigation.navigate(url, {
      name: upcomingConference.name,
      title: upcomingConference.title1,
      date: upcomingConference.date,
      venu: upcomingConference.venu,
      url: upcomingConference.url,
      image: upcomingConference.image,
      about: upcomingConference.about,
      aboutshort: upcomingConference.aboutShort,
      hotelAddress: upcomingConference.hotelAddress,
      latitude: upcomingConference.latitude,
      longitude: upcomingConference.longitude,
    });
  }
  const handpleUrlPress = ({ item }) => {
    // const url = `${item.url}`;
    // Linking.openURL(url);
    const screenname = "ConferenceScreen";
    const url = `${screenname}`;
    // const url = `${item.screenname}`;
    navigation.navigate(url, {
      name: item.name,
      title: item.title1,
      date: item.date,
      venu: item.venu,
      url: item.url,
      image: item.image,
      about: item.about,
      aboutshort: item.aboutShort,
      hotelAddress: item.hotelAddress,
      latitude: item.latitude,
      longitude: item.longitude,
    });
  }
  const HandleUrl = ({ item }) => {
    const handpleUrlPress = () => {
      // const url = `${item.url}`;
      // Linking.openURL(url);
      const url = `${item.screenname}`;
      navigation.navigate(url, {
        name: item.name,
        title: item.title1,
        date: item.date,
        venu: item.venu,
        url: item.url,
        image: item.image,
        about: item.about,
        aboutshort: item.aboutShort,
        hotelAddress: item.hotelAddress,
        url: item.url,
      });
    }
    return (
      <ScrollView>

        {/* <View style={{ borderWidth: 10, borderColor: "#fff", borderRadius: 15, backgroundColor: "#fff", marginHorizontal: 10, width: 310 }}>
          <Image source={item.image} style={{ borderRadius: 15, width: "100%", height: 190 }} />
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{item.name}</Text>
          <Text style={{ fontSize: 15, fontWeight: "600", textAlign: 'center', color: "#f66b10" }}>{item.title1}</Text>
          <View style={{ flexDirection: "row", marginVertical: 12, justifyContent: "center" }}>
            <View style={{ flexDirection: "row", }}>
              <Fontisto name="date" size={16} color="#f66b10" />
              <Text style={{ fontSize: 12, fontWeight: "600", marginHorizontal: 10, }}>{item.date}</Text>
            </View>
            <View style={{ flexDirection: "row", textAlign: "center" }}>
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
              <Text style={{ textAlign: "center" }}>Register Now</Text> 
            </View>
          </View>
        </View>  */}
      </ScrollView>
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
          // console.log('setSessions', response)
          setPlenary(response.data.data)
          setKeynote(response.data.output2)
          setOral(response.data.output3)
          setSessions(response.data.output4)
        })
    } catch (error) {
      console.error('Error fetching sheet data:', error)
    }
  }

  const UpComingConferences = () => {
    const [upcomingConference, setUpcomingConference] = useState(upcomingConferencelist)
    return (
      <ScrollView>
        <View>
          {upcomingConference && upcomingConference.map((upcomingConference, index) => {
            setMonth(upcomingConference.month);
            setToken(upcomingConference.token);
            return (
              <>
                <View style={styles.notificationcontainer} key={index}>
                  {upcomingConference.token == "live" && <>
                    <View style={{ flexDirection: "row", }}>
                      <View style={{ paddingLeft: 5, paddingRight: 10, textAlign: "left" }}>
                        {/* <Image source={upcomingConference.image} /> */}
                      </View>

                      <Text style={{ fontWeight: "600", fontSize: 17 }}>{upcomingConference.name} {"\n"}
                        <View>
                          <Text style={{ fontWeight: "normal", fontSize: 13, marginTop: 4, }}>{upcomingConference.month} {upcomingConference.dates}, {upcomingConference.year}
                            <Text style={{ color: "#f66b10", fontSize: 15, fontWeight: "bold" }}> | </Text>
                            <Text style={{ paddingLeft: 13 }}>{upcomingConference.venu}</Text>
                          </Text>
                        </View>
                      </Text>
                    </View>
                    <View style={{ alignItems: "end", borderLeftWidth: 1, paddingLeft: 5, textAlign: "right" }}>
                      {/* <Text>10 53 pm</Text> */}
                      <Text style={{ marginBottom: 5, fontWeight: "bold", color: "#f66b10", fontSize: 14, textAlign: "center" }}>$210</Text>
                      {/* <Text style={{ fontWeight: "bold", fontSize: 15 }} oonPress={() => {navigation.navigate({ upcomingConference }) }}>Join Now</Text> */}
                      <TouchableOpacity>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }} onPress={() => { handpleupcomming({ upcomingConference }) }}>Join Now</Text>
                      </TouchableOpacity>
                    </View>
                  </>}
                </View>
              </>
            )
          })}
        </View>
      </ScrollView>
    )
  }

  const ConferencesLists = () => {
    const SECTIONS = upcomingConferencelist;
    <TabView
      navigationState={state}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={handleIndexChange}
    />
  }

  const [state, setState] = useState(
    {
      search: '',
    }
  )

  const updateSearch = (search) => {
    setState({ search });
  };
  //  ********************************************
  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const List = () => {
    return (
      <View style={{ height: "100%" }}>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    )
  }

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  // const fetchDatatest = async () => {
  //   try {
  //     const response = await axios.post('http://192.168.2.117:8000/login.php');
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };


  const { search } = state;
  return (
    <ScrollView>
      <SafeAreaView>
        {/* <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      /> */}
        {/* current conferences start */}
        <View>
          {token == "live" ?
            <>

              <View style={{ backgroundColor: "#373a43", paddingHorizontal: 25, flexDirection: "row", justifyContent: "space-between", height: 120, paddingTop: 15 }}>
                <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>{month} 2023 Conferences</Text>
                <TouchableOpacity onPress={() => navigation.navigate("CurrentConferences")}>
                  <Text style={{ textAlign: "right", color: "red" }}> View all</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: -60, flexDirection: "row", marginBottom: 30, }}>

                <ViewSlider
                  renderSlides={
                    <>
                      {popular_conferences && popular_conferences.map((item, index) => {
                        return (
                          <View key={index}>
                            <View style={styles.viewBox}>
                              <View style={{ borderWidth: 10, borderColor: "#fff", borderRadius: 15, backgroundColor: "#fff", width: width - 20, }}>
                                <Image source={item.image} style={{ borderRadius: 15, width: "100%", height: 225 }} />
                                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{item.name}</Text>
                                <Text style={{ fontSize: 17, fontWeight: "600", textAlign: 'center', color: "#f66b10" }}>{item.title1}</Text>
                                <View style={{ flexDirection: "row", marginVertical: 12, justifyContent: "center" }}>
                                  <View style={{ flexDirection: "row", }}>
                                    <Fontisto name="date" size={18} color="#f66b10" />
                                    <Text style={{ fontSize: 15, fontWeight: "600", marginHorizontal: 10, }}>{item.date}</Text>
                                  </View>
                                  <View style={{ flexDirection: "row", textAlign: "center" }}>
                                    <EvilIcons name="location" size={20} color="#f66b10" />
                                    <Text style={{ fontSize: 15, fontWeight: "600" }}>{item.venu}</Text>
                                  </View>
                                </View>
                                <View>
                                  <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "center", marginHorizontal: 10 }}>
                                    <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 12, paddingHorizontal: 20 }} onPress={() => { handpleUrlPress({ item }) }}>
                                      <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}> Register Now </Text>
                                    </TouchableOpacity>
                                    {program &&
                                      <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "green", paddingVertical: 12, paddingHorizontal: 20, marginLeft: 10 }} onPress={() => { handpleUrlPress({ item }) }}>
                                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>Program </Text>
                                      </TouchableOpacity>
                                    }
                                    {/* <TouchableOpacity style={{ borderRadius: 10, backgroundColor: "#363942", paddingVertical: 12, paddingHorizontal: 10 }} onPress={handpleUrlPress}>
                              <Text style={{ color: "#fff", textAlign: "center" }}> Submit Abstract </Text>
                            </TouchableOpacity> */}
                                    {/* <Button title='SIGN IN' color="#000" /> */}
                                  </View>
                                  <View>
                                    {/* <Text style={{ textAlign: "center" }}>Register Now</Text> */}
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        )
                      })}
                    </>
                  }
                  style={styles.slider}     //Main slider container style
                  height={410}    //Height of your slider
                  slideCount={popular_conference.length}    //How many views you are adding to slide
                  // dots={true}     // Pagination dots visibility true for visibile 
                  // dotActiveColor='red'     //Pagination dot active color
                  // dotInactiveColor='gray'    // Pagination do inactive color
                  // dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
                  autoSlide={true}    //The views will slide automatically
                  slideInterval={5000}    //In Miliseconds
                />
                {/* <HandleUrl item={popular_conference} /> */}
                {/* <FlatList
          data={popular_conference}
          renderItem={({ item }) =>
            <HandleUrl item={item} />
          }
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        /> */}
              </View>
            </>
            :
            <View style={{ backgroundColor: "#373a43", paddingHorizontal: 25, flexDirection: "row", justifyContent: "space-between", height: 120, paddingTop: 15 }}>
              <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>No Conferences</Text>
              <TouchableOpacity onPress={() => navigation.navigate("CurrentConferences")}>
                <Text style={{ textAlign: "right", color: "red" }}> View all</Text>
              </TouchableOpacity>
            </View>
          }

          {/* current conferences end */}
          {/* Up coming conferences start */}

          <View>
            <View>
              <Text style={styles.header2}>Coming Conferences</Text>
            </View>
            <View>
              <UpComingConferences />
            </View>
          </View>
          {/* Up coming conferences end */}
          {/* conferences 2024 start */}
          <View>
            <View>
              <Text style={styles.header2}>Conferences 2024</Text>
            </View>
            <View>
              <ConferencesList />
              {/* <List /> */}
            </View>
          </View>
          {/* conferences 2024 ends */}
          {/* ABout */}
          <View>
            {/* <Text>Getting Data email</Text> */}
          </View>
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
              <View style={{ backgroundColor: "#373a43", borderTopLeftRadius: 80, borderTopEndRadius: 80, }}>
                <View>
                  <View style={{ borderTopWidth: 5, borderColor: "#fff", marginTop: 12, height: 1, marginHorizontal: 150, borderRadius: 50 }}>
                    {/* <Text>-------------</Text> */}
                  </View>
                </View>
                <View style={{ backgroundColor: "#373a43", flexDirection: "row", paddingVertical: 20, paddingHorizontal: 10, justifyContent: "space-evenly", borderTopLeftRadius: 60, borderTopEndRadius: 60, }}>

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
      </SafeAreaView >
    </ScrollView>
  );
}

export default WebHomeScreen


const styles = StyleSheet.create({
  header2: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: "bold",
    marginBottom: 20,
    // backgroundColor: "#fff"
  },
  notificationcontainer: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    borderRadius: 25,
    justifyContent: "space-between",
    // width: 300,
    // justifyContent: "flex-end",
  },
  tabBar: {
    backgroundColor: '#fff',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1
  },
  tabContainer: {
    borderBottomColor: '#090909'
  },
  tabText: {
    padding: 15,
    color: '#9e9e9e',
    fontSize: 18,
    fontWeight: '500'
  },
  separator: {
    height: 0.5,
    width: '96%',
    alignSelf: 'flex-end',
    backgroundColor: '#eaeaea'
  },
  sectionHeaderContainer: {
    height: 10,
    backgroundColor: '#f6f6f6',
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1
  },
  sectionHeaderText: {
    color: '#010101',
    backgroundColor: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingBottom: 5,
    paddingHorizontal: 15
  },
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  itemTitle: {
    flex: 1,
    fontSize: 20,
    color: '#131313'
  },
  itemPrice: {
    fontSize: 18,
    color: '#131313'
  },
  itemDescription: {
    marginTop: 10,
    color: '#b6b6b6',
    fontSize: 16
  },
  itemRow: {
    flexDirection: 'row'
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    // padding: 10,
    // marginEnd: 15,
    // marginHorizontal: 15,
    alignItems: 'center',
    height: 410
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 10,
    // backgroundColor: 'pink'
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    // bottom: 15
  }
})