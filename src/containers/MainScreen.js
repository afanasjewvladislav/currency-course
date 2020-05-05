import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import HomePage from '../components/Home'
import { getCourses } from '../store/actions/actions'

const MainScreen = AppNavigator => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  })

  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MainScreen
