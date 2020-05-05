import { StyleSheet, TextInput, View, Text, Picker, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { getCurrency } from '../store/actions/actions';

const CurrencyConverterScreen = () => {
  const [сurrency, setCurrency] = useState();
  const [sum, setSum] = useState();

  const lists = useSelector(state => state.CoursesList.lists);
  const dispatch = useDispatch();

  const getConvertCurrency = () => {
    dispatch(getCurrency({сurrency, sum}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput style = {styles.input}
          keyboardType='numeric'
          placeholder = "Введите сумму в рублях"
          placeholderTextColor = "#9a73ef"
          onChangeText = {text => setSum(text)}
          value={sum}
        />
        <Picker
          selectedValue={сurrency}
          style={styles.select}
          onValueChange={value => setCurrency(value)}
        >
          <Picker.Item label='Выберите валюту' value='0' />
          {lists.map(item =>
            (<Picker.Item label={item.CharCode} value={item.Value}/>),
          )}
        </Picker>
      </View>
       <Text>{getConvertCurrency()}</Text>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {lists.map(item =>
              (<View key={item.ID} style={styles.wrapper}>
                <Text >{item.CharCode}</Text>
                <View style={styles.textContent}>
                  <Text>{item.Name}</Text>
                </View>
                <Text>{(item.convertValue).toFixed(2)}</Text>
              </View>),
            )}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 12,
    margin: 15,
    marginRight: 0,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  select: {
    flex: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
    height: 40,
  },
});

export default CurrencyConverterScreen;
