import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { addTodo } from "../../store/todos/slice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddTodoScreen = ({ navigation }) => {
  
  const [text, setText] = React.useState(" ");
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add todo</Text>

      <TextInput
      style={styles.input}
      onChangeText={(text) => setText(text)}
      value={text}
      />

      <Button
      title='Voeg toe'
      onPress={() => 
        navigation.navigate("Todo", {
          value: text
        },
      dispatch(addTodo({ ...text, id: uuidv4() })))}
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
    textAlign: 'center',
    borderWidth: 1,
    padding: 10,
  },
})