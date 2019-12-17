import { StyleSheet, TextInput, View, Text, Picker } from 'react-native';
import React, {useState} from 'react';
import { useSelector } from 'react-redux'

const CurrencyConverter = () => {
  const [сurrency, setCurrency] = useState();
  const [sum, setSum] = useState();

  const lists = useSelector(state => state.CoursesList.lists);

  const getConvertCurrency = () => {
    const result = (sum / сurrency).toFixed(2);
    const accessAllowed = (isNaN(result)) ? 0 : result;
    return accessAllowed;
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

export default CurrencyConverter;
