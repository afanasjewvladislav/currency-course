import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import HomePage from '../components/Home'
import { getCourses } from '../store/actions/actions'

const CurrentCourses = AppNavigator => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourses())
  })

  return (
    <View style={styles.container}>
      <HomePage props={AppNavigator}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default CurrentCourses
