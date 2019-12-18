import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import NavigationPanel from './NavigationPanel'

const Home = props => {
  const lists = useSelector(state => state.CoursesList.lists)
  // const screen = useSelector(state => state.Screens.screens);

  const Body = () => (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {lists.map(item =>
              (<View key={item.ID} style={styles.wrapper}>
                <Text >{item.CharCode}</Text>
                <View style={styles.textContent}>
                  <Text>{item.Name}</Text>
                </View>
                <Text>{(item.Value).toFixed(2)}</Text>
              </View>),
            )}
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
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  textContent: {
    width: 250,
    alignItems: 'center',
  },
})

export default Home
