import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Pressable } from 'react-native';
import Constants from 'expo-constants';

import ReportHolder from './ReportHolder';
import BackButton from './BackButton';

const Registry = ({route, navigation}) => {
  
  const { _history } = route.params;

  return (
    <View style={{height:'100%', width: '100%'}}>
    <BackButton goto={() => navigation.goBack(null)}/>
      <View style={styles.container}>
        <Image 
          source={require('./assets/icon.png')}
          style={{width: 150, height: 100}}/>
        <View style={styles.subContainer}>
          <View style={styles.halfContainer}>
            <Text style={styles.title}>{'Report'}</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Calculator', { history: _history })}>
              <Image 
              source={require('./assets/calc.png')}
              style={{width: 50, height: 50}}/>
              <Text style={{color: '#ffffff'}}>
                {'Calculator'}
              </Text>
            </Pressable>
          </View>
          <ReportHolder data={_history}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  subContainer: {
    flexGrow: 0,
    height: 300,
    width: '90%'
  },
  halfContainer: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    width: '50%',
    color: '#0876b3',
    fontSize: 24,
    fontWeight: 'bold',
    display: 'grid',
    placeItems: 'center start'
  },
  button: {
    flexGrow: 1,
    backgroundColor: '#0072b1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    zIndex: 1
  }
});

export default Registry;