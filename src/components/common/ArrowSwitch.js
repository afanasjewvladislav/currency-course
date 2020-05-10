import React from 'react';
import {StyleSheet, View} from 'react-native';

import ArrowTopIcon from "../icon/ArrowTopIcon";
import ArrowBottomIcon from "../icon/ArrowBottomIcon";

const ArrowSwitch = props => {
  const GetArrow = params => {
    switch(params) {
      case 'top':
        return <ArrowTopIcon color={'#159D60'} width={8} height={8}/>;
      case 'bottom':
        return <ArrowBottomIcon color={'#E92360'} width={8} height={8} />;
    }
  };

  return (
    <View style={styles.arrow}>
      {GetArrow(props.direction)}
    </View>
  )
};

const styles = StyleSheet.create({
  arrow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 5,
  },
});

export default ArrowSwitch;
