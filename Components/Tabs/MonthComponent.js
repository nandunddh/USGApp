// MonthComponent.js
import React from 'react';
import { View, Text } from 'react-native';

const MonthComponent = ({ data }) => (
  <View>
    {data.map((item, index) => (
      <View key={index}>
        {/* Render your content for each item in the month */}
        <Text>{item.name}</Text>
      </View>
    ))}
  </View>
);

export default MonthComponent;
