import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {TituloTarjetaERG} from '../components/TituloTarjetaERG.js';
import {TarjetaMainERG} from '../components/TarjetaMainERG.js';
import {TarjetaCreditosERG} from '../components/TarjetaCreditosERG.js';
import BarraInferior from "../components/BarraInferior";
import {EncabezadoERG} from '../components/EncabezadoERG.js';
import {TarjetaResumenCreditosERG} from '../components/TarjetaResumenCreditosERG.js';
import {StyleSheet, View, ScrollView} from 'react-native';

export default function UsoCreditos(){
  return(
        <SafeAreaProvider><SafeAreaView style={styles.safe}>
        <View style={styles.container}>
        <TituloTarjetaERG texto="USO DE CRÉDITOS"/>
        <TarjetaMainERG>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContenido}
                showsVerticalScrollIndicator={false}
            >
            <TarjetaCreditosERG/>

            <View style={styles.historial}>
                <EncabezadoERG
                    texto="HISTORIAL DE INTERCAMBIO"
                    style={styles.tituloHistorial}
                    txt={styles.txtHistorial}
                />
                <TarjetaResumenCreditosERG/>
                <TarjetaResumenCreditosERG/>
                <TarjetaResumenCreditosERG/>
                <TarjetaResumenCreditosERG/>
            </View>
          </ScrollView>
        </TarjetaMainERG>
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
    scroll:{
        flex:1,
    },
    scrollContenido:{
        gap:25,
        paddingBottom:10,
    },
    historial:{
        backgroundColor:'#52796f',
        borderRadius:15,
        padding:12,
        gap:15,
    },
    tituloHistorial:{
        flex:0,
        alignItems:'center',
        marginVertical:8,
    },
    txtHistorial:{
        color:'#2f3e46',
        fontWeight:'700',
    },
    safe:{
    flex:1,
    backgroundColor: "#84a98c",
    alignItems:'center',
  },
});