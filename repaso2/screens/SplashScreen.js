import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,View, ActivityIndicator,Text,Image} from 'react-native';
import imagenLocal from '../assets/libros.png'

export default function SplashScreen(){
    return(
        <View style={styles.container}>
            <Image
          source={imagenLocal}
          style={{width: 300,height: 300,borderRadius:20,}}
        />
            <ActivityIndicator size="Large" color="#000" style={{marginTop:20}}/>
            <Text style={{color:"purple", fontSize:25}}>Bienvenido a biblioteca</Text>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});