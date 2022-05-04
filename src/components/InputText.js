import React from 'react'
import {StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

export default function InputText({label,secure,onChangeText,error,values,name}) {
  return (
    <TextInput
    style = {styles.inputStyle}
      label = {label}
      underlineColor="black"
      activeUnderlineColor="black"
      secureTextEntry={secure}
      onChangeText={onChangeText}
      error={error}
      values={values}
      name={name}
    />
  )
}

const styles = StyleSheet.create({
  inputStyle:{
    marginVertical:10,
    borderTopRightRadius:15
  }
})