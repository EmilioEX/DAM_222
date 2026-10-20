//1.- Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';

//2.- Zona Principal (main)
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil style={styles.tarjeta1} nombre="Genaro" carrera="ITIID" materia="Movil" cuatri="4"/>
      <Perfil style={styles.tarjeta2} nombre="Emilio" carrera="ITIID" materia="Movil" cuatri="4"/>
      <Perfil style={styles.tarjeta3} nombre="Jenny" carrera="ITIID" materia="Movil" cuatri="4"/>

      <StatusBar style="auto" />
    </View>
  );
}

// 3.- Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta1:{
    backgroundColor:'orange',
  },
  tarjeta2:{
    backgroundColor:'yellow',
  },
  tarjeta3:{
    backgroundColor:'green',
  },
});
