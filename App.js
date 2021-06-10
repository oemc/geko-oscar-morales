import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Registry from './Registry';
import Calculator from './Calculator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}/>
        <Stack.Screen
          name="Registry"
          component={Registry}/>
        <Stack.Screen
          name="Calculator"
          component={Calculator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
