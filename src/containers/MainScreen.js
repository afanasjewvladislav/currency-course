import React, { useEffect, useState } from 'react'
import {RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { getCourses } from '../store/actions/actions';

import Preloader from '../components/common/Preloader.js';
import CustomStatusBar from '../components/common/CustomStatusBar.js';
import ArrowSwitch from '../components/common/ArrowSwitch';

const MainScreen = AppNavigator => {
  const dispatch = useDispatch();

  const lists = useSelector(state => state.CoursesList.lists);

  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getCourses(setIsLoading));
  }, [])

  const getDirection = (dif) => {
    if(dif > 0) {
      return 'top';
    }
    return 'bottom';
  };

  const getColor = (dif) => {
    if(dif > 0) {
      return styles.green;
    }

    return styles.red;
  };

  const onRefresh = () => {
    setIsLoading(true);
    dispatch(getCourses(setIsLoading));
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      {(isLoading === true && <Preloader/>) ||
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
          >
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

                    <View style={styles.percentageBlock}>
                      <ArrowSwitch
                        direction={getDirection(item.difference)}
                      />
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
                </View>
              </View>),
            )}
          </ScrollView>
        </SafeAreaView>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001434',
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
  green: {
    color: '#159D60',
  },
  red: {
    color: '#E92360',
  },
  percentageBlock: {
    flexDirection: 'row',
  },
})

export default MainScreen
