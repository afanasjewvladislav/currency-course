import { StyleSheet, TextInput, View } from 'react-native';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector } from 'react-redux'

const CurrencyConverter = () => {
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();
  const [summ, setSumm] = useState();

  const lists = useSelector(state => state.CoursesList.lists);
  console.log('>>', firstValue, secondValue, summ);

  const Converter = () => (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setFirstValue(value)}
        value={firstValue}
        items={lists}
        style={styles.inputAndroid}
      />
      <RNPickerSelect
        value={secondValue}
        onValueChange={(value) => setSecondValue(value)}
        items={lists}
        style={styles.inputAndroid}
      />
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Введите сумму"
        placeholderTextColor = "#9a73ef"
        onChangeText={(value) => setSumm(value)}
        value={summ}
      />
    </View>
  )

  return (
    <Converter/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'space-between',
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
