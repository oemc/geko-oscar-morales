import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Pressable} from 'react-native';
import Constants from 'expo-constants';

import BackButton from './BackButton';


const Key = ({text, textColor, _onPress}) => {
  return(
    <Pressable style={styles.key} onPress={_onPress}>
      <Text style={{fontSize: 30, color: textColor}}>{text}</Text>
    </Pressable>
  );
}

const KeyBoard = ({add, remove, clear, operate}) => {
  return(
    <View style={styles.keyBoard}>
      <Key text='C' textColor='#009821' _onPress={()=>remove()}/>
      <Key text='Clear' textColor='#009821' _onPress={()=>clear()}/>
      <Key text='%' textColor='#009821' _onPress={()=>add('%')}/>
      <Key text='/' textColor='#009821' _onPress={()=>add('/')}/>
      <Key text='7' textColor='#b2b2b2' _onPress={()=>add(7)}/>
      <Key text='8' textColor='#b2b2b2' _onPress={()=>add(8)}/>
      <Key text='9' textColor='#b2b2b2' _onPress={()=>add(9)}/>
      <Key text='X' textColor='#009821' _onPress={()=>add('X')}/>
      <Key text='4' textColor='#b2b2b2' _onPress={()=>add(4)}/>
      <Key text='5' textColor='#b2b2b2' _onPress={()=>add(5)}/>
      <Key text='6' textColor='#b2b2b2' _onPress={()=>add(6)}/>
      <Key text='-' textColor='#009821' _onPress={()=>add('-')}/>
      <Key text='1' textColor='#b2b2b2' _onPress={()=>add(1)}/>
      <Key text='2' textColor='#b2b2b2' _onPress={()=>add(2)}/>
      <Key text='3' textColor='#b2b2b2' _onPress={()=>add(3)}/>
      <Key text='+' textColor='#009821' _onPress={()=>add('+')}/>
      <Key text='%' textColor='#009821' _onPress={()=>add('%')}/>
      <Key text='0' textColor='#b2b2b2' _onPress={()=>add(0)}/>
      <Key text='.' textColor='#b2b2b2' _onPress={()=>add('.')}/>
      <Key text='=' textColor='#009821' _onPress={()=>operate(null)}/>
    </View>
  );
}

const Calculator = ({route, navigation}) => {
  const { history } = route.params;

  const [stackHistory, setStackHistory] = useState(history);
  const [stack, setStack] = useState([0]);
  
  const printStack = (_stack) => {
    let msg = '';
    _stack.slice(1, _stack.length).forEach( n => msg = msg.concat(n) );
    return msg;
  }

  const addToStack = (n) => {
    if(n==='%'){
      flattenStack(stack.concat(n));
    }
    else{
      setStack(stack.concat(n));
    }
  }

  const removeStack = () => {
    if(stack.length == 1){
      clearStack();
    }
    else{
      setStack(stack.slice(0, stack.length-1));
    }
  }

  const clearStack = () => {
    setStack([0]);
  }

  const operate = (n1, n2, operand) => {
    switch (operand){
          case '+':
            n1 = n1 + parseFloat(n2);
            break;
          case '-':
            n1 = n1 - parseFloat(n2);
            break;
          case 'X':
            n1 = n1 * parseFloat(n2);
            break;
          case '/':
            n1 = n1 / parseFloat(n2);
            break;
          case '%':
            n1 = parseFloat(n1) / 100;
            break;
        }
      return n1;
  }

  const flattenStack = (_stack) => {
    let newStack = _stack === null ? stack : _stack;
    let n1 = 0;
    let n2 = '';
    let lastOperation = '+';
    for(let i = 0; i < newStack.length; i++){
      if(newStack[i]==='.'){
        n2 = n2.concat(newStack[i]);
      }
      else if(isNaN(newStack[i])){
        n1 = operate(n1, n2, lastOperation);
        n2= '';
        lastOperation = newStack[i];
      }
      else{
        n2 = n2.concat(newStack[i]);
      }
    }
    //This is the result
    n1 = operate(n1, n2, lastOperation);
    //Save whole string as new report
    newStack = newStack.concat(['=', n1]);
    let newReport = {
      id: stackHistory.length + 1,
      value: printStack(newStack)
    };
    //transfer number to stack
    newStack = [0].concat(n1.toString().split(''));
    setStack(newStack);
    //send string back to registry
    setStackHistory(stackHistory.concat(newReport));
  }

  return(
    <View style={{height: '100%', width: '100%', backgroundColor: '#0072b1'}}>
      <View style={styles.headerBG}></View>
      <BackButton 
        goto={()=>navigation.navigate('Registry', {_history: stackHistory})}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            source={require('./assets/icon.png')}
            style={{width: 150, height: 100, zIndex: 2}}/>
          <Text style={styles.title}>{'Calculator'}</Text>
        </View>
        <View style={styles.operationContainer}>
          <Text style={styles.operation}>{printStack(stack)}</Text>
        </View>
        <KeyBoard add={addToStack} remove={removeStack} clear={clearStack} operate={flattenStack}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  headerBG:{
    position: 'fixed',
    top: -200,
    left: '-25%',
    borderRadius: '50%',
    height: 350,
    width: '150%',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center'
  },
  header:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title:{
    color: '#009821',
    fontWeight: 'bold'
  },
  operation:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  operationContainer:{
    flexGrow: 0,
    width: '100%',
    display: 'grid',
    placeItems: 'center'
  },
  keyBoard:{
    flexGrow: 0,
    paddingTop: '5%',
    paddingHorizontal: '5%',
    width: '100%',
    height: '50%',
    backgroundColor: '#ffffff',
    display: 'grid',
    "grid-template-columns": "1fr 1fr 1fr 1fr",
    "grid-template-rows": "1fr 1fr 1fr 1fr 1fr"
  },
  key:{
    display: 'grid',
    placeItems: 'center',
  }
})

export default Calculator;