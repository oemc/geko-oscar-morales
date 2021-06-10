import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

const Login = ({navigation}) => {
  return(
    <View style={{height:'100%'}}>
      <View style={styles.bg}/>
      <View style={styles.container}>
        <Image 
          source={require('./assets/exit.png')}
          style={{width: 100, height: 100}}/>
        <View style={styles.card}>
          <Image 
            source={require('./assets/icon.png')}
            style={{width: 150, height: 100}}/>
          <TextInput style={styles.input} placeholder='User'/>
          <TextInput style={styles.input} placeholder='Password'/>
          <Button title='Login' color='#009821' onPress={() => navigation.navigate('Registry', {_history: []})}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }, 
  bg: {
    position: 'fixed',
    width: '100%',
    height: '60%',
    backgroundColor: '#0072b1',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10%',
    zIndex: 1,
    flexGrow: 0,
    width: '90%',
    backgroundColor: '#ffffff'
  },
  input:{
    marginVertical: 10,
    borderWidth: 1
  }
});

export default Login;

    