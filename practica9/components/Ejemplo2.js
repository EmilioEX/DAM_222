import { StatusBar } from 'expo-status-bar';
//Importamos nuestro componente "Pressable"
import { StyleSheet, View, Switch } from 'react-native';
import { useState } from 'react';


export const Ejemplo2=()=> {
  const [activo, setActivo] = useState(false);
  const cambioSwitch = () => setActivo(estadoActual => !estadoActual);
  return (
    <View style={styles.container}>
      <Switch
          trackColor={{false: '#ff07de', true: '#ff5e00'}}
          thumbColor={activo ? '#009688' : '#00ffea'}
          onValueChange={cambioSwitch}
          value={activo}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
  },
});