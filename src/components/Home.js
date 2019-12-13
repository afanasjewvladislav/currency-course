import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {useSelector} from 'react-redux';

import NavigationPanel from './NavigationPanel';

const Home = (props) => {
  const lists = useSelector((state) => state.TodoList.lists);
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
      {lists.map((item) => <Text className="main-task-list-body" key={item.id}>{item.name}</Text>)}
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
