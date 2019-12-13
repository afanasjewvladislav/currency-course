import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import HomePage from '../components/Home';
import { getCourses } from '../store/actions/actions';

const CurrentCourses = (AppNavigator) => {
  const dispatch = useDispatch();

  setTimeout(() => {
    const createTask = () => {
      dispatch(getCourses());
    };
    console.log(createTask());
  }, 500);

  return (
    <View style={styles.container}>
      {/*<Text>Two Screen</Text>*/}
      <HomePage props={AppNavigator}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default CurrentCourses;
