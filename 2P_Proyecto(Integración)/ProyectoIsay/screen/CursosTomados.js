import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {TituloTarjetaERG} from '../components/TituloTarjetaERG.js';
import {TarjetaMainERG} from '../components/TarjetaMainERG.js';
import {TarjetaResumenCreditosERG} from '../components/TarjetaResumenCreditosERG.js';
import {StyleSheet, View, ScrollView} from 'react-native';
import BarraInferior from "../components/BarraInferior";

export default function CursosTomados(){
  return(
      <SafeAreaProvider><SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TituloTarjetaERG texto="CURSOS TOMADOS"/>
        <TarjetaMainERG>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContenido}
            showsVerticalScrollIndicator={false}
          >
            <TarjetaResumenCreditosERG/>
            <TarjetaResumenCreditosERG/>
            <TarjetaResumenCreditosERG/>
            <TarjetaResumenCreditosERG/>
            <TarjetaResumenCreditosERG/>
          </ScrollView>
        </TarjetaMainERG>
        <StatusBar style="auto"/>
      </View>
        <BarraInferior></BarraInferior>
      </SafeAreaView></SafeAreaProvider>
  );
}

const styles=StyleSheet.create({
  safe:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:'center',
  },
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
    gap:15,
    paddingBottom:10,
  },
});