import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {TimeERG} from '../components/TimeERG.js';
import BarraInferior from "../components/BarraInferior";
import {TituloTarjetaERG} from '../components/TituloTarjetaERG.js';
import {TarjetaMainERG} from '../components/TarjetaMainERG.js';
import {TarjetaPerfilERG} from '../components/TarjetaPerfilERG.js';
import {TarjetaMenuUsuarioERG} from '../components/TarjetaMenuUsuarioERG.js';
import {StyleSheet, Text, View, Pressable} from 'react-native';

export default function Perfil(){
  return(
      <SafeAreaProvider><SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TimeERG/>
        <TituloTarjetaERG texto="PERFIL"/>
        <TarjetaMainERG>
          <View style={styles.contenido}>
            <View style={styles.tarjetas}>
              <TarjetaPerfilERG/>
              <TarjetaMenuUsuarioERG/>
            </View>
            <Pressable>
              <Text style={styles.cerrar}>Cerrar Sesión</Text>
            </Pressable>
          </View>
        </TarjetaMainERG>
        <StatusBar style="auto"/>
      </View>
      <BarraInferior/>
      </SafeAreaView></SafeAreaProvider>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    padding:15,
    gap:15,
  },
  contenido:{
    flex:1,
    justifyContent:'flex-start',
  },
  tarjetas:{
    gap:40,
  },
  cerrar:{
    fontWeight:'700',
    textDecorationLine:'underline',
    marginTop:20,
    color:"#354f52",
  },
  safe:{
    flex:1,
    backgroundColor: "#84a98c",
    alignItems:'center',
  },
});