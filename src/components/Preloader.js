 import React from 'react';
 import {
   View,
   StyleSheet
 } from 'react-native';

 import {MaterialIndicator} from 'react-native-indicators';


 const Preloader = () => (
    <View style={styles.indicator}>
      <MaterialIndicator color='#0C80B1' />
    </View>
  );

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Preloader;
