import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function CardComponent(){
    return (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card</Text>
          <Text style={styles.subtitles}>--- This is a subtitle ---</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FFF',
      borderRadius: 10,
      textAlign: 'center',
      padding: 20,
      marginTop: 25
    },
    cardTitle: {
      color: '#000',
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center"
    },
    subtitles: {
      color: "#123456",
      fontSize: 8.5,
      textAlign: "left"
    }
  });