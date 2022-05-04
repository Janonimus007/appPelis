import { StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function ButtonGlobal({label,onPress,loading}) {
  return (
    <Button 
      color='#005650'
      style = {styles.buttonStyle}
      mode='contained'
      onPress={onPress}
      loading={loading}
    >
      
      {label}
    </Button>
  )
}

const styles = StyleSheet.create({
  buttonStyle:{
    marginVertical:20,
    height:40
  }
})