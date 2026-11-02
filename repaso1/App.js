import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet} from 'react-native';

import Screen1 from './screens/Screen1.js'

export default function App() {
  return(
    <Screen1/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:30,
    gap:20,
  },
});
