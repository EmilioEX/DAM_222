import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';

export default function App() {
  const[mostrarSplash, setSplash]=useState(true);
    useEffect(()=>{
        const tiempo =setTimeout(()=>{
            setSplash(false);
        }, 2000);
        return () => clearTimeout(tiempo);
    },[]);
    if(mostrarSplash){
        return(
            <SplashScreen/>
        )
    }else{
      return(
        <MainScreen/>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
