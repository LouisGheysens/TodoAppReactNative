import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { addTodo } from "../../store/todos/slice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddTodoScreen = ({ navigation }) => {
  
  const [text, setText] = React.useState(" ");

  const resetFunc = (val) => {
    setText('');
  }

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add todo</Text>

      <TextInput
      style={styles.input}
      onChangeText={(text) => setText(text)}
      value={text}
      />

      <View style={styles.buttonRows}>
      <View style={styles.button}>
      <Button
       title="Voeg toe"
      disabled={!text}
      style={styles.button}
      onPress={() => dispatch(addTodo({ ...text, id: uuidv4() }))}
      />
      </View>

      <View style={styles.button2}>
      <Button
       title="Reset"
      disabled={!text}
      style={styles.button}
      onPress={() => resetFunc(text)}
      />
      </View>
      </View>

    </View>
  )
}

export default AddTodoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
},
buttonRows: {
  flexDirection: 'row'
},
name: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
},
button: {
  marginHorizontal: 20,
  marginTop: 5,
  marginRight: 150,
  backgroundColor: 'yellow'
},
button2: {
  marginHorizontal: 20,
  marginTop: 5,
  marginRight: 150,
  backgroundColor: 'red'
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
    textAlign: 'center',
    borderWidth: 1,
    padding: 10,
  },
})