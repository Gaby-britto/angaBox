import React from 'react'
import { Image, StyleSheet, Text, View,  } from 'react-native'
import TextField from '../Componentes/TextField'
import MyButton from '../Componentes/Button'

export default function Login() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
            source={require('../Assets/Images/logoImage.png')}
        />
        <Text style={styles.logo}>Login</Text>
       <TextField/>
       <TextField/>
       <TextField/>
       <MyButton/>
       <View style={styles.containerText}>
       <Text style={styles.question}>Don't have an account?</Text>
       <Text style={styles.login}>Sign up</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        
    },
    image: {
        marginTop: 80,
        width: 300,
        height: 300
    },
    logo:{
        marginTop: 10,
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 25
    },
    question:{
      color: 'gray',
      marginTop: 20,
    },
    login:{
      marginTop: 20,
      marginLeft: 5,
      color: "#9400D3"

    },
    containerText: {
      justifyContent: "flex-start",
      flexDirection: "row",
    }
})
