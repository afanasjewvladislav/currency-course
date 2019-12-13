import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'

const NavigationPanel = (AppNavigator) => {
  const props = AppNavigator.props.props.props;

  const theme = {
    Button: {
      containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderLeftColor: '#d6d7da',
        borderRightColor: '#d6d7da',
      },
      titleStyle: {
        color: 'rgb(255,255,255)',
        alignItems: 'center',
        fontSize: 12,
        margin: 10,
      },
    },
  }

  const App = () => (
    <ThemeProvider theme={theme}>
      <View style={styles.navigationPanel}>
        <Button
          title="Конвертер из одной валюты в другую"
          // onPress={() => switchPage(navigation)}
          onPress={() => props.navigation.navigate('CurrencyConverter')}
        />
      </View>
    </ThemeProvider>
  )

  return (
    <App/>
  )
}

// const switchPage = (AppNavigator) => {
//   console.log('tet', AppNavigator)
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
