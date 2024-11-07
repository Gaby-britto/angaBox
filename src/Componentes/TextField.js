import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet, View } from 'react-native'

export default function TextField() {
  return (
    <View>
         <TextInput
        style={styles.input}
            placeholder='Nome'
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        height: 50,
        width: 330,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 5,
    },
})
