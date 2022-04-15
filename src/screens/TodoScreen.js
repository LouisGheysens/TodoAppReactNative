import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../store/todos/slice";

const TodoScreen = () => {

  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todos);

  const todoItem = ({ item }) => {

    return (
      <View>
        <Text>{item}</Text>
        <Button
        style={styles.deleteButton}
          title="Delete"
          onPress={() => dispatch(removeTodo(item.id))}
        />
      </View>
    );
  };


  return (
    <View>
     <FlatList
        data={todosState}
        ListEmptyComponent={<Text style={styles.blankTodo}>No todo's</Text>}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (<Text >{item.name}</Text>)}
      />
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  blankTodo: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 30
  },
  deleteButton: {
    backgroundColor: 'red'
  }
})