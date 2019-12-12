import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const NavigationPanel = (AppNavigator) => (
    <View style={styles.navigationPanel}>
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => AppNavigator.props.navigation.navigate('SecondScreen')}
      >
        <Text style={styles.text}>Текущие курсы валют</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => AppNavigator.props.props.navigation.navigate('Five')}
        // onPress={() => switchPage(AppNavigator)}
      >
        <Text style={styles.text}>
          Конвертер из одной валюты в другую
        </Text>
      </TouchableOpacity>
    </View>
)

// const switchPage = (AppNavigator) => {
//   console.log('tet', AppNavigator.props.props);
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationPanel: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgb(194,57,57)',
  },
  navigationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderLeftColor: '#d6d7da',
    borderRightColor: '#d6d7da',
  },
  text: {
    color: 'rgb(255,255,255)',
    alignItems: 'center',
    fontSize: 12,
    margin: 10,
  },
})

export default NavigationPanel
