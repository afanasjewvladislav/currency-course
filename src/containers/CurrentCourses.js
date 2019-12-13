import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomePage from '../components/Home'

const CurrentCourses = (AppNavigator) => {
  return (
    <View style={styles.container}>
      {/*<Text>Two Screen</Text>*/}
      <HomePage props={AppNavigator}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default CurrentCourses;
