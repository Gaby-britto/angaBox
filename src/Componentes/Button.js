import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function MyButton() {
  return (
    <View style={style.container}>
      <Button 
        style={style.button}
        title="Register" 
        onPress={() => Alert.alert('Botão pressionado!')} 
        color="#9400D3"
      />
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    marginTop: 30
  },
  container: {
    marginTop: 20,
    width: 330,
  }
})
