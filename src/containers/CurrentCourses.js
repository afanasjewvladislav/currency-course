import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import HomePage from '../components/Home'
import { getCourses, setNavigation } from '../store/actions/actions'

const CurrentCourses = AppNavigator => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourses());
    dispatch(setNavigation(AppNavigator));
  })

  return (
    <View style={styles.container}>
      <HomePage/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default CurrentCourses
