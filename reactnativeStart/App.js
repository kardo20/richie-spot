import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CardComponent from './CardComponent';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="light"/>

      <Text style={{ color: 'white' }}>Hello world!</Text>
      
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
