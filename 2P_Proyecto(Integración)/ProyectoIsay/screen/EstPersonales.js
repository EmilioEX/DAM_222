import {StatusBar} from 'expo-status-bar';
import BarraInferior from "../components/BarraInferior";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {TituloTarjetaERG} from '../components/TituloTarjetaERG.js';
import {TarjetaMainERG} from '../components/TarjetaMainERG.js';
import {TarjetaEstPersonales} from '../components/TarjetaEstPersonales.js';
import {TarjetaHrsCategoriaERG} from '../components/HrsInvertidasCategoria.js';
import {TarjetaGraficaCreditosERG} from '../components/TarjetaGraficaCreditosERG.js';
import {StyleSheet, View, ScrollView} from 'react-native';

export default function EstPersonales(){
  return(
        <SafeAreaProvider><SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TituloTarjetaERG texto="ESTADÍSTICAS PERSONALES"/>
        <TarjetaMainERG>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContenido}
            showsVerticalScrollIndicator={false}
          >
            <TarjetaEstPersonales/>
            <View style={styles.graficas}>
              <TarjetaHrsCategoriaERG valor1={65} valor2={20} valor3={15}/>
              <TarjetaGraficaCreditosERG/>
            </View>
          </ScrollView>
        </TarjetaMainERG>
        <StatusBar style="auto"/>
      </View>
        <BarraInferior></BarraInferior>
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
    scroll:{
        flex:1,
    },
    scrollContenido:{
        gap:25,
        paddingBottom:10,
    },
    graficas:{
        backgroundColor:'#354f52',
        borderRadius:15,
        paddingHorizontal:12,
        paddingVertical:30,
        gap:30,
    },
    safe:{
        flex:1,
        backgroundColor: "#84a98c",
        alignItems:'center',
    },
});