import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Pressable} from 'react-native';

const BackButton = ({goto}) => {
  return(
    <Pressable style={styles.backButton} onPress={goto}>
      <Image 
      source={require('./assets/back.png')}
      style={{width: 30, height: 30}}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'fixed',
    width: 50,
    height: 50,
    top: 20,
    left: 10,
    zIndex: 1
  }
})

export default BackButton;