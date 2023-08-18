import { View, Text, StyleSheet, FlatList, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios, { Axios } from 'axios';

const Program = ({route}) => {
  const [Plenary, setPlenary] = useState(route.params.Plenary);
  const [Keynote, setKeynote] = useState(route.params.Keynote);
  const [Oral, setOral] = useState(route.params.Oral);
  const [Sessions, setSessions] = useState(route.params.Sessions);

  return (
    <View style={{flex:1}}>

      {/* {Loading ?

        <SafeAreaView style={{flex:10,justifyContent: "center", alignItems: "center"}}>
          < Text style={{fontSize: 40}}>Program Loading</Text >
          < Text style={{fontSize: 40}}>Please Wait</Text >
        </SafeAreaView >

        :
        <ScrollView>
          <View style={[styles.ScientificSessions, { marginBottom: 10 }]}>
            <Text style={{ fontWeight: "bold" }}>Scientific Sessions</Text>
          </View>
          <View
            style={styles.flatList}>
            {Sessions && Sessions.map((Sessions, index) => {
              return (
                <View style={styles.row} key={index}>
                  <Text style={styles.OralProfile}>{Sessions.Sessions}</Text>
                </View>
              )
            })}
          </View>
          <View style={styles.heading1}>
            <Text style={{ color: "#fff" }}>Day-1 (November 01,2023)</Text>
          </View>
          <View style={styles.heading2}>
            <Text style={{ fontWeight: "bold" }}>Plenary Presentations | 40 Minutes</Text>
          </View>
          <View
            style={styles.flatList}>
            {Plenary && Plenary.map((Plenary, index) => {
              return (
                <View style={styles.row} key={index}>
                  {Plenary.url !== "" && (
                    <Image source={{ uri: Plenary.url }} style={styles.image} />
                  )}
                  <Text style={styles.Profile}>{Plenary.Profile}
                    {'\n'}
                    <Text style={styles.name}>{Plenary.Name}, <Text style={styles.affiliation}>{Plenary.Affiliation}</Text></Text>
                  </Text>
                </View>
              )
            })}
          </View>
          <View style={styles.heading2}>
            <Text style={{ fontWeight: "bold" }}>Keynote Presentations | 30 Minutes</Text>
          </View>
          <View
            style={styles.flatList}>
            {Keynote && Keynote.map((Keynote, index) => {
              return (
                <View style={styles.row} key={index}>
                  {Keynote.url !== "" && (
                    <Image source={{ uri: Keynote.url }} style={styles.image} />
                  )}
                  <Text style={styles.Profile}>{Keynote.Profile}
                    {'\n'}
                    <Text style={styles.name}>{Keynote.Name}, <Text style={styles.affiliation}>{Keynote.Affiliation}</Text></Text>
                  </Text>
                </View>
              )
            })}
          </View>
          <View style={styles.heading2}>
            <Text style={{ fontWeight: "bold" }}>Oral Presentations | 20 Minutes</Text>
          </View>
          <View
            style={styles.flatList}>
            {Oral && Oral.map((Oral, index) => {
              return (
                <View style={styles.row} key={index}>
                  <Text style={styles.Profile}>{Oral.Profile}
                    {'\n'}
                    <Text style={styles.name}>{Oral.Name}, <Text style={styles.affiliation}>{Oral.Affiliation}</Text></Text>
                  </Text>
                </View>
              )
            })}
          </View>
          <View style={[styles.heading1, { marginBottom: 10 }]}>
            <Text style={{ color: "#fff" }}>Day-2 (November 02,2023) </Text>
          </View>
          <View
            style={styles.flatList}>
            {Oral && Oral.map((Oral, index) => {
              return (
                <View style={styles.row} key={index}>
                  <Text style={styles.Profile}>{Oral.Profile}
                    {'\n'}
                    <Text style={styles.name}>{Oral.Name}, <Text style={styles.affiliation}>{Oral.Affiliation}</Text></Text>
                  </Text>
                </View>
              )
            })}
          </View>
        </ScrollView >
      } */}
       <ScrollView>
          <View style={[styles.ScientificSessions, { marginBottom: 10 }]}>
            <Text style={{ fontWeight: "bold" }}>Scientific Sessions</Text>
          </View>
          <View
            style={styles.flatList}>
            {Sessions && Sessions.map((Sessions, index) => {
              return (
                <View style={styles.row} key={index}>
                  <Text style={styles.OralProfile}>{Sessions.Sessions}</Text>
                </View>
              )
            })}
          </View>
          <View style={styles.heading1}>
            <Text style={{ color: "#fff" }}>Day-1 (November 01,2023)</Text>
          </View>
          <View style={styles.heading2}>
            <Text style={{ fontWeight: "bold" }}>Plenary Presentations | 40 Minutes</Text>
          </View>
          <View
            style={styles.flatList}>
            {Plenary && Plenary.map((Plenary, index) => {
              return (
                <View style={styles.row} key={index}>
                  {Plenary.url !== "" && (
                    <Image source={{ uri: Plenary.url }} style={styles.image} />
                  )}
                  <Text style={styles.Profile}>{Plenary.Profile}
                    {'\n'}
                    <Text style={styles.name}>{Plenary.Name}, <Text style={styles.affiliation}>{Plenary.Affiliation}</Text></Text>
                  </Text>
                </View>
              )
            })}
          </View>
          <View style={styles.heading2}>
            <Text style={{ fontWeight: "bold" }}>Keynote Presentations | 30 Minutes</Text>
          </View>
          <View
            style={styles.flatList}>
            {Keynote && Keynote.map((Keynote, index) => {
              return (
                <View style={styles.row} key={index}>
                  {Keynote.url !== "" && (
                    <Image source={{ uri: Keynote.url }} style={styles.image} />
                  )}
                  <Text style={styles.Profile}>{Keynote.Profile}
                    {'\n'}
                    <Text style={styles.name}>{Keynote.Name}, <Text style={styles.affiliation}>{Keynote.Affiliation}</Text></Text>
                  </Text>
                </View>
              )
            })}
          </View>
          <View style={styles.heading2}>
            <Text style={{ fontWeight: "bold" }}>Oral Presentations | 20 Minutes</Text>
          </View>
          <View
            style={styles.flatList}>
            {Oral && Oral.map((Oral, index) => {
              return (
                <View style={styles.row} key={index}>
                  <Text style={styles.Profile}>{Oral.Profile}
                    {'\n'}
                    <Text style={styles.name}>{Oral.Name}, <Text style={styles.affiliation}>{Oral.Affiliation}</Text></Text>
                  </Text>
                </View>
              )
            })}
          </View>
          <View style={[styles.heading1, { marginBottom: 10 }]}>
            <Text style={{ color: "#fff" }}>Day-2 (November 02,2023) </Text>
          </View>
          <View
            style={styles.flatList}>
            {Oral && Oral.map((Oral, index) => {
              return (
                <View style={styles.row} key={index}>
                  <Text style={styles.Profile}>{Oral.Profile}
                    {'\n'}
                    <Text style={styles.name}>{Oral.Name}, <Text style={styles.affiliation}>{Oral.Affiliation}</Text></Text>
                  </Text>
                </View>
              )
            })}
          </View>
        </ScrollView >
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flatList: {
    borderWidth: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    marginLeft: 0,
    paddingLeft: 0
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  name: {
    color: "red",
  },
  affiliation: {
    color: "#000",
  },
  heading2: {
    backgroundColor: '#ffc000',
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  heading1: {
    backgroundColor: "#002060",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
  },
  ScientificSessions: {
    backgroundColor: "#ffc000",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 10,
    fontWeight: "bold",
    marginHorizontal: 10,
    borderWidth: 1,
  },
  Profile: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    flex: 1,
    flexWrap: 'wrap'
  },
  OralProfile: {
    paddingHorizontal: 10,
    fontWeight: "bold"
  },
});

export default Program