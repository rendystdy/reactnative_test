import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import Input from '../../components/Input';

const ScreenVerifEmail = () => {
  const [input, setInput] = useState('');

  const [isError, setIsError] = useState(false);

  const [borderColor, setBorderColor] = useState('grey')

  const onChange = (value) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    setInput(value);
    if (regex.test(value)) {
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  const onFocus = () => {
    setBorderColor('blue');
  }

  const onBlur = () => {
    setBorderColor('grey');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <Input value={input} onChange={onChange} styleTextInput={[styles.inputContainer, {borderColor: isError ? 'red' : borderColor}]} placeholder="Email" onBlur={onBlur} onFocus={onFocus} />
      {isError && (
        <View style={ styles.wrapperTextError }>
          <Text style={styles.textError}>Format Email incorret</Text>
        </View>
      )}
    </View>
  )
}

export default ScreenVerifEmail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    borderRadius: 8,
    padding: 8
  },
  textError: {
    color: 'red',
    fontSize: 12
  },
  wrapperTextError: {
    marginTop: 8
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    color: 'green',
    marginBottom: 8
  }
})