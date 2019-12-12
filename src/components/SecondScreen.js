import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondScreen = () => (
  <View style={styles.container}>
    <Text>Two Screen</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default SecondScreen;
