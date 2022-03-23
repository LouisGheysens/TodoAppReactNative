import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*Als lijst leeg is gebruik de ListEmptyComponent die een message weergeeft zoals "Geen todo's" => ListEmptyComponent ={() => <Text>Geen todo's gevonden</Text>} */

const TodoScreen = () => {
  return (
    <View>
      <Text>TodoScreen</Text>
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})