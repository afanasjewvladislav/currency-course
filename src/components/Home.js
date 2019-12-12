import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavigationPanel from './NavigationPanel';

const Home = (props) => {
  const Body = () => (
    <View style={styles.container}>
      <View style={
        {
          flex: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }
    >
      <Text> Hello world!</Text>
    </View>
    <NavigationPanel props={props} />
  </View>
  )

  return (
    <Body />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
