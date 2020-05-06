import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

const Home = () => {
  const lists = useSelector(state => state.CoursesList.lists);

  const getColor = (dif) => {
    if(dif > 0) {
      return styles.green;
    }

    return styles.red;
  };

  const Body = () => (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {lists.map(item =>
              (<View key={item.ID} style={styles.wrapper}>
                <View style={styles.char}>
                  <Text
                    style={styles.text}
                  >
                    {item.CharCode}
                  </Text>
                </View>
                <View style={styles.textContent}>
                  <Text style={styles.text}>{item.Name}</Text>
                  <View style={styles.wrapperValues}>
                    <Text
                      style={[styles.text, styles.value]}
                    >
                      {(item.Value)}
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        styles.value,
                        getColor(item.difference)
                      ]}
                    >
                      {(item.difference)}
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        styles.value,
                        getColor(item.difference)
                      ]}
                    >
                      {(item.percentageChange) + '%'}
                    </Text>
                  </View>
                </View>
              </View>),
            )}
        </ScrollView>
      </SafeAreaView>
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
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 10,
    height: 100,
    backgroundColor: '#102858',
    borderRadius: 10,
  },
  char: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
  },
  textContent: {
    width: '85%',
    paddingTop: 20,
    paddingLeft: 10,
  },
  text: {
    color: '#F9FDFF',
  },
  value: {
    paddingTop: 10,
  },
  wrapperValues: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: '60%',
    justifyContent: 'space-between',
  },
  // dif: {
  //   paddingLeft: 15,
  // },
  green: {
    color: '#159D60',
  },
  red: {
    color: '#E92360',
  }
})

export default Home
