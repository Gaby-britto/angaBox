import React from 'react'
import { Image, StyleSheet, Text, View,  } from 'react-native'
import TextField from '../Componentes/TextField'
import MyButton from '../Componentes/Button'

export default function Initial() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
            source={require('../Assets/Images/logoImage.png')}
        />
        <Text style={styles.logo}>AngaBox</Text>
        <Text style={styles.text1}>Share your opinions, discover recommendations</Text>
        <Text style={styles.text2}>and dive into the best stories of cinema!</Text>
       <MyButton/>
       <MyButton/>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        
    },
    image: {
        marginTop: 150,
        width: 350,
        height: 350
    },
    logo:{
        marginTop: 10,
        fontSize: 46,
        fontWeight: 'bold',
        marginBottom: 25,
        color: "#9400D3"
    },
    text1:{
      color: 'gray',
      marginTop: 20,
    },
    text2:{
      color: 'gray',
      marginLeft: 5
    },
    containerText: {
      justifyContent: "flex-start",
      flexDirection: "row",
    }
})
