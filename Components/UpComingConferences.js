import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DB_URL } from "./Constants/Constants";
import { useContext } from "react";
import MyContext from "./MyContext";
import { StyleSheet } from "react-native";

const UpComingConferences = ({ conference }) => {
  const imageUrl = `${DB_URL}uploads/logos/${conference.logo}`;

  return (
    <View style={styles.notificationcontainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ paddingLeft: 5, paddingRight: 10, textAlign: 'left' }}>
          {conference.logo && <Image source={{ uri: imageUrl }} style={{ width: 80, height: 100 }} />}
        </View>
        <Text style={{ fontWeight: '600', fontSize: 17 }}>{conference.id} {'\n'}</Text>
      </View>
      <View style={{ alignItems: 'end', borderLeftWidth: 1, paddingLeft: 5, textAlign: 'right' }}>
        <Text style={{ marginBottom: 5, fontWeight: 'bold', color: '#f66b10', fontSize: 14, textAlign: 'center' }}>
          ${conference.price}
        </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default UpComingConferences;


const styles = StyleSheet.create({
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
})