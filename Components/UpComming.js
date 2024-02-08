// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const UpComming = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const renderMonthContent = (month) => {
    const notificationDesc = [
      {
        name: "CCE-2024",
        month: "Feb",
        date: "26-28",
        venu: "Boston, MA",
        image: require("../assets/favicon.png"),
        url: "https://catalysis.unitedscientificgroup.org/"
      },
      {
        name: "Pharma R&D-2024",
        month: "Feb",
        date: "26-28",
        venu: "Boston, MA",
        image: require("../assets/favicon.png"),
        url: "https://pharma-rnd.com/"
      },
      {
        name: "GEM-2024",
        month: "Mar",
        date: "04-06",
        venu: "Los Angeles, CA",
        image: require("../assets/favicon.png"),
        url: "https://globalenergymeet.com/"
      },
      {
        name: "Ensure-2024",
        month: "Mar",
        date: "11-13",
        venu: "Boston, MA",
        image: require("../assets/favicon.png"),
        url: "https://wasteandrecycling.org/"
      },
      {
        name: "Nursing Science-2024",
        month: "Apr",
        date: "17-19",
        venu: "Los Angeles, CA",
        image: require("../assets/favicon.png"),
        url: "https://nursing.unitedscientificgroup.org/",
      },
      {
        name: "CEB-2024",
        month: "Apr",
        date: "22-24",
        venu: "Baltimore, MD",
        image: require("../assets/favicon.png"),
        url: "https://cellexpbiol.unitedscientificgroup.org/"
      },
      {
        name: "NDS-2024",
        month: "May",
        date: "06-08",
        venu: "Barcelona, Spain",
        image: require("../assets/favicon.png"),
        url: "https://neurodisordersconference.com/"
      },
    ]
    // Customize the content for each month here
    return (
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
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={months}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.monthButton}
            onPress={() => setSelectedMonth(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {selectedMonth && renderMonthContent(selectedMonth)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  monthButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    backgroundColor: '#f66b10',
    borderRadius: 35,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  monthContent: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f66b10',
    borderRadius: 10,
  },
  monthText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
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
});

export default UpComming;
