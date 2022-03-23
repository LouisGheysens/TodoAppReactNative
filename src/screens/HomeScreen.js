import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo app</Text>
    </View>
  )
}

export default HomeScreen

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
    fullName: {
        textAlign: "center",
        fontSize: 16
    }
})