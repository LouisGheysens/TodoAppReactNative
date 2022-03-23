import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoScreen from '../screens/TodoScreen';
import HomeScreen from '../screens/HomeScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
const TodoStack = () => {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "#f4511e"
        },
    }}
    >
        <Stack.Screen name="Home" component={ HomeScreen }/>

        <Stack.Screen name="AddTodo" component={ AddTodoScreen }  
        options={ ({ route }) => ({title: route.params.name})}/>

        <Stack.Screen name="Todo" component={ TodoScreen }  
        options={ ({ route }) => ({title: route.params.name})}/>
    </Stack.Navigator>
  )
}

export default TodoStack

const styles = StyleSheet.create({})