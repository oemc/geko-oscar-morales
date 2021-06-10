import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, FlatList } from 'react-native';
import Constants from 'expo-constants';

const Report = ({number, operation}) => {
  return (
    <View style={styles.halfContainer}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.operation}>{operation}</Text>
    </View>
  );
}

const ReportHolder = ({data}) => {
  const renderItem = ({item}) => (<Report number={item.id} operation={item.value}/>);
  return (
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}/>
  );
}

const styles = StyleSheet.create({
  halfContainer: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  number:{
    flexGrow: 0,
    flexShrink: 0,
    padding: 0,
    width: 50,
    height: 50,
    borderWidth: 1,
    fontSize: 30,
    color: '#ffffff',
    backgroundColor: '#009821',
    display: 'grid',
    placeItems: 'center'
  },
  operation:{
    paddingLeft: 15,
    flexGrow: 1,
    height: 50,
    borderWidth: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#b2b2b2',
    display: 'grid',
    placeItems: 'center start'
  }
});

export default ReportHolder;