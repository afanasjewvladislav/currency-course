import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import NavigationPanel from './NavigationPanel'

const Home = props => {
  const lists = useSelector(state => state.CoursesList.lists)

  const Body = () => (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={
            {
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }
          }>
            {lists.map(item =>
              (<View key={item.ID}
               style={
                 {
                   width: 400,
                   flexDirection: 'row',
                   justifyContent: 'space-between',
                   alignItems: 'space-between',
                 }
               }>
                <Text>{item.CharCode}</Text>
                <Text>{item.Name}</Text>
                <Text>{item.Value}</Text>
              </View>),
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      <NavigationPanel props={props}/>
    </View>
  )

  return (
    <Body/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Home
