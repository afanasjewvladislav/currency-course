import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import NavigationPanel from './NavigationPanel'

const Home = props => {
  const lists = useSelector(state => state.CoursesList.lists)
  // console.log('lists', lists);

  const Body = () => (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={
            {
              flex: 15,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              // justifyContent: 'center',
              // alignItems: 'stretch',
            }
          }>
            {lists.map(item =>
              (<Text key={item.ID}>
                {item.CharCode} - {item.Name} - {item.Value}
              </Text>),
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
