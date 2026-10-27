//1.- Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,SafeAreaView} from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';

//2.- Zona Principal (main)
export default function SafeScreen() {
  return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>

          <Text style={styles.title}>Práctica en equipo</Text>
          <Text style={styles.subtitle}>desliza hacia abajo para mover más</Text>
          
          {[...Array(15)].map((_, index)=>(
            <View key={index} style={styles.box}>
              <Text>Registro de prueba {index+1}</Text>
            </View>
          ))}

          <StatusBar> style="auto"</StatusBar>


        </ScrollView>
      </SafeAreaView>
  );
}

// 3.- Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    width:'100%',
    backgroundColor:'#00bfff',
  },
  scrollContent:{
    padding:20,
    alignItems: 'center',
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    marginTop:10,
  },
  subtitle:{
    fontSize:16,
    color:'#666',
    marginBottom:20,
  },
  box:{
    backgroundColor:'#fff',
    width: '90%',
    padding:30,
    marginVertical: 10,
    borderRadius:8,
    elevation:3,
  },
});