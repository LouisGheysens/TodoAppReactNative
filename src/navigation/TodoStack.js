import { Button, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoScreen from '../screens/TodoScreen';
import HomeScreen from '../screens/HomeScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import { AntDesign } from '@expo/vector-icons'; 

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

        <Stack.Screen
        options={{
          headerRight: ({}) => (
          <Pressable onPress={() => navigation.navigate("AddTodo")}>
          <AntDesign name="plus" size={24} color="black" />
          </Pressable>
          ),
          }}
          name="Todo" 
        component={ TodoScreen }
        />

    </Stack.Navigator>
  )
}

export default TodoStack

const styles = StyleSheet.create({})