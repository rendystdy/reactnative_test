import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({
  value,
  onChange,
  styleContainer,
  styleTextInput,
  onBlur,
  onFocus,
  placeholder,
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <TextInput
        style={[styles.input, styleTextInput]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {},
  input: {},
});
