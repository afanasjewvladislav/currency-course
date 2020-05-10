import React from 'react';
import {Dimensions, StatusBar, Platform, View, StyleSheet} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT;
}

export const IOSHeight = isIPhoneX ? 44 : 20;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? IOSHeight : StatusBar.currentHeight;


export default({backgroundColor = '#041E43'}) => (
  <View style={[ styles.container, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
  </View>
);


const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? STATUSBAR_HEIGHT : 0,
    marginTop: Platform.OS === 'ios' ? -IOSHeight : 0
  },
});
