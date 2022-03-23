import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();

const TodoStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "#f4511e"
        },
    }}
    >
        <Stack.Screen name="Home" component={ HomeScreen }/>
        <Stack.Screen name="Todo" component={ TodoScreen$ }  
        options={ ({ route }) => ({title: route.params.name})}/>
    </Stack.Navigator>
  )
}

export default TodoStack

const styles = StyleSheet.create({})