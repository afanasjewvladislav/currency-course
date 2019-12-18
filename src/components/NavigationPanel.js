import React from 'react'
import {View} from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'
import { useSelector } from 'react-redux'

const NavigationPanel = () => {
  const navigations = useSelector(state => state.Screens.navigations)
  // console.log('>>', navigations);

  const theme = {
    Button: {
      containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#d6d7da',
        borderRightColor: '#d6d7da',
        margin: 20,
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
      <View>
        <Button
          title="Конвертер из одной валюты в другую"
          // onPress={() => switchPage(props)}
          onPress={() => navigations.navigation.navigate('CurrencyConverter')}
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

export default NavigationPanel
