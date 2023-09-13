import { View, Text } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';

const pdf = () => {
  return (
    <View>
      <Text>pdf</Text>
      {/* <Pdf
        trustAllCerts={false}
        source={PdfResource}
        style={styles.pdf}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
      /> */}
    </View>
  )
}

export default pdf