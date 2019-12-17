import { StyleSheet, TextInput, View, Text } from 'react-native';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector } from 'react-redux'

const CurrencyConverter = () => {
  const [сurrency, setCurrency] = useState();
  const [sum, setSum] = useState();

  const lists = useSelector(state => state.CoursesList.lists);
  console.log('>>', сurrency, sum);

  const getConvertCurrency = () => {
    return (sum / сurrency).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={value => setCurrency(value)}
        value={сurrency}
        items={lists}
        style={styles.inputAndroid}
      />
      <TextInput style = {styles.input}
        keyboardType='numeric'
        placeholder = "Введите сумму в рублях"
        placeholderTextColor = "#9a73ef"
        onChangeText = {text => setSum(text)}
        value={sum}
      />
      <Text>{getConvertCurrency()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputAndroid: {
    fontSize: 18,
    color: 'red',
    width: 50,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
});

export default CurrencyConverter;
