import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoScreen from '../screens/TodoScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';
import TodoStack from '../navigation/TodoStack'


const Tab = createBottomTabNavigator();

const TodoTabNavigator = () => {
    return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: { backgroundColor: "#f4511e" },
        tabBarActiveTintColor: "white",
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "#f4511e",
            },
    }}
    >
    <Tab.Screen
    name="Home"
    component={TodoStack}
    options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
        <Feather size={size} color={color} name="home" />
        ),
        }}   
        />
        <Tab.Screen
        name="Add todo"
        component={AddTodoScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="add-task" />
          ),
        }}
      />
      <Tab.Screen
        name="Todo's"
        component={TodoScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 size={size} color={color} name="tasks" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TodoTabNavigator

const styles = StyleSheet.create({})