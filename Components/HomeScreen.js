import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from '@react-navigation/native'
// import Program from "./Program" 
import axios from 'axios'

const HomeScreen = ({ navigation }) => {

  const spreadsheetId =
    "https://docs.google.com/spreadsheets/d/13dC1M4SvysyiAogGLQDqYn7IIqbKW_zEKMmBQWFCjJI/edit?usp=sharing"
  const range = 'Sheet1!D' // Assuming the URLs are in column A and other data is in column B
  const apiKey = 'AIzaSyDIpd5CY4qApQ5t_azRPvLPr26gqTiC3HA'

  // const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=a7FYq6zdJBrB5643gSkJ1Gh9mp5IZ7t4v4H6ygtqnIcEA71j5Mk6Vj-RM2hhn77CTGIP4GfVM6xfeI2AuU4GtaS7Vu4gZe_bm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNTpQVOAbO-e10yb5OVf8CJ7SmGZ8jMlfFJnq_VLyDQWB7v3I7vju9c26-ZAB7tm5uQgsUUI_iGq8CtNOIae6bpBAcIoptOhrdz9Jw9Md8uu&lib=MELw67nwW2E5sw1H-VB-MPMWQ4spgb1DD';
  const url =
    'https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}'
  const [Plenary, setPlenary] = useState([]);
  const [Keynote, setKeynote] = useState([]);
  const [Oral, setOral] = useState([]);
  const [Sessions, setSessions] = useState([]);


  useEffect(() => {
    fetchData()

  }, [Plenary, Keynote, Oral])


  const fetchData = async () => {
    try {
      const response = await axios.get(
        // 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVu4gn6Sgp-0VbKUWrpxDd5wVKc96DpiMdAgNx1XBQxcWXz9naPQDML3lIj7CQM71KGFmlL4qHY75d/pubhtml'
        // https://script.google.com/macros/s/AKfycbwkBUU1UZyAq9M1LDOurgTF9983YPPXhz_TZA8G3ADofjRA538vD4MGaF3DIJxUZQb-Yw/exec
        // 'https://sheets.googleapis.com/v4/spreadsheets/YOUR_SPREADSHEET_ID/values/YOUR_RANGE?key=YOUR_API_KEY'
        'https://script.googleusercontent.com/macros/echo?user_content_key=a7FYq6zdJBrB5643gSkJ1Gh9mp5IZ7t4v4H6ygtqnIcEA71j5Mk6Vj-RM2hhn77CTGIP4GfVM6xfeI2AuU4GtaS7Vu4gZe_bm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNTpQVOAbO-e10yb5OVf8CJ7SmGZ8jMlfFJnq_VLyDQWB7v3I7vju9c26-ZAB7tm5uQgsUUI_iGq8CtNOIae6bpBAcIoptOhrdz9Jw9Md8uu&lib=MELw67nwW2E5sw1H-VB-MPMWQ4spgb1DD',
      ).then((response) => {
        // console.log('setSessions', response.data)
        setPlenary(response.data.data);
        setKeynote(response.data.output2);
        setOral(response.data.output3);
        setSessions(response.data.output4);
      })
    } catch (error) {
      console.error('Error fetching sheet data:', error)
    }
  }
  return (
    <View>
      {/* <Text>HomeScreen</Text> */}
      <Button
        title="Program"
        onPress={() => navigation.navigate('Program',{
          Plenary: Plenary,
          Keynote: Keynote,
          Oral: Oral,
          Sessions: Sessions
        })}
      />
      {/* <Link to={{ screen: 'Program' }}>Program</Link> */}
    </View>
  )
}

export default HomeScreen