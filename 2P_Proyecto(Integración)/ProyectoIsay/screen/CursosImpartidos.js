import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {TituloTarjetaERG} from '../components/TituloTarjetaERG.js';
import {TarjetaMainERG} from '../components/TarjetaMainERG.js';
import {PestERG} from '../components/PestERG.js';
import {BubbleTextERG} from '../components/BubbleTextERG.js';
import {TarjetaCrsImpartidosERG} from '../components/TarjetaCrsImpartidosERG.js';
import {StyleSheet, View, ScrollView} from 'react-native';
import BarraInferior from "../components/BarraInferior";

export default function CursosImpartidos(){
  return(
      <SafeAreaProvider><SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TituloTarjetaERG texto="CURSOS IMPARTIDOS"/>
        <TarjetaMainERG>
          <View style={styles.encabezado}>
            <PestERG/>
            <View style={styles.boxBubble}>
              <BubbleTextERG texto="# Cursos"/>
            </View>
          </View>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContenido}
            showsVerticalScrollIndicator={false}
          >
            <TarjetaCrsImpartidosERG/>
            <TarjetaCrsImpartidosERG/>
            <TarjetaCrsImpartidosERG/>
            <TarjetaCrsImpartidosERG/>
            <TarjetaCrsImpartidosERG/>
          </ScrollView>
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
  encabezado:{
    gap:12,
    marginBottom:12,
  },
  boxBubble:{
    alignSelf:'flex-start',
  },
  scroll:{
    flex:1,
  },
  scrollContenido:{
    gap:15,
    paddingBottom:10,
  },
  safe:{
    flex:1,
    backgroundColor: "#84a98c",
    alignItems:'center',
  },
});