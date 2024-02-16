import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { PDFView } from 'react-native-pdf';

const Pdf = () => {
  const source = { uri: 'https://catalysis.unitedscientificgroup.org/pdfs/CCE-Program-2024.pdf', cache: true };
  return (
    <PDFView
      source={source}
      onLoadComplete={(numberOfPages, filePath) => {
        console.log(`Number of pages: ${numberOfPages}`);
      }}
      onPageChanged={(page, numberOfPages) => {
        console.log(`Current page: ${page}`);
      }}
      onError={(error) => {
        console.log(error);
      }}
      onPressLink={(uri) => {
        console.log(`Link pressed: ${uri}`);
      }}
      style={styles.pdf}
    />
  );
};

export default Pdf;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})
