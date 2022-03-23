import { Button, StyleSheet, Text, View, useState } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { v4 as uuidv4 } from "uuid";

const AddTodoScreen = () => {
  
  const [text, onChangeText] = useState("Todo");


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo toevoegen</Text>

      <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      />

      <Button
      title='Voeg toe'
      onPress={() => dispatch(addTodo({ ...item, id: uuidv4() }))}
      color="#841584"
      />
    </View>
  )
}

export default AddTodoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
},
name: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
},
title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 300,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
},
input: {
    height: 40,
    margin: 12,
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
  },
})