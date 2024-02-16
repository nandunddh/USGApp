import { View, Text } from 'react-native'
import React from 'react'

const About = ({ route }) => {
  const about = route.params.about;
  const newtext = about.split(/\n/);
  console.log("newtext   ", newtext)
  return (
    <View style={{ backgroundColor: "#fff" }}>
      {newtext && newtext.map((text, index) =>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10, }} key={index}>
          <Text style={{ lineHeight: 22, textAlign: "justify", fontSize: 15, fontWeight: "400", fontFamily: "sans-serif" }}>{text}</Text>
        </View>
      )}
    </View>
  )
}

export default About