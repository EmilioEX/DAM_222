import { StatusBar } from 'expo-status-bar';
import React from 'react';
//Importamos nuestro componente "Pressable"
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import  {Ejemplo1}  from './components/Ejemplo1.js';
import  {Ejemplo2}  from './components/Ejemplo2.js';
import  {Ejemplo3}  from './components/Ejemplo3.js';
import  {Ejemplo4}  from './components/Ejemplo4.js';
import  {Ejemplo5}  from './components/Ejemplo5.js';


export default function App() {
  const [isLongPressed, setIsLongPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Ejemplo1/>
      <Ejemplo2/>
      <Ejemplo3/>
      <Ejemplo4/>
      <Ejemplo5/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});