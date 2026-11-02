import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Pressable, Alert, ScrollView} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {Componente1} from '../components/Componente1.js'

export default function Screen1() {

  const [nombre, setNombre]=useState('');
  const [carrera, setCarrera]=useState('');
  const [semestre, setSemestre]=useState('');


  const [taller, setTaller]=useState();
  const [constancia, setConstancia]=useState();
  const [deporte, setDeporte]=useState();
  const Alerta1= () => {
  if (!nombre.trim() || !carrera.trim() || !semestre.trim()){
    Alert.alert('Localhost:8081',
                  `Campos incompletos

Debes de llenar todos los campos`,
                  [{text: 'Aceptar', onPress: ()=>console.log('AlertaCerrada')}]
    )
    return;
  } else if (isNaN(Number(semestre))|| !Number.isInteger(Number(semestre))|| Number(semestre)<=0 || Number(semestre)>12){
    Alert.alert('Localhost:8081',
                  `Error

El semestre debe de ser un número entero`,
                  [{text: 'Aceptar'}]
    )
    return;

  }
    Alert.alert('Localhost:8081', 
                  `Nombre: ${nombre}
Carrera: ${carrera}
Semestre: ${semestre}

Taller: ${taller ? 'Si' : 'No'}
Constancia: ${constancia ? 'Si' : 'No'}
Deporte: ${deporte ? 'Si' : 'No'}`,
                  [{text: 'Entendido'}]);
  }
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safe}>
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.texto}>Repaso #1</Text>

      <View style={styles.tarjeta1}>

        <Text style={styles.texto3}>Registro de Evento Universitario</Text>


        <Text style={styles.texto2}>Ingrese su nombre:</Text>
        <TextInput 
          style={styles.inputBox}
          placeholder="Emilio Rivera..."
          placeholderTextColor="#94a3b8"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.texto2}>Ingrese su carrera:</Text>
        <TextInput 
          style={styles.inputBox}
          placeholder="TIID..."
          placeholderTextColor="#94a3b8"
          value={carrera}
          onChangeText={setCarrera}
        />

        <Text style={styles.texto2}>Ingrese su Semestre:</Text>
        <TextInput 
          style={styles.inputBox}
          placeholder="1..."
          placeholderTextColor="#94a3b8"
          value={semestre}
          onChangeText={setSemestre}
        />
      </View>

      <View style={styles.tarjeta1}>
        <Text style={styles.texto3}>Opciones</Text>
        
        <View style={styles.conteiner_row}>
          <Text style={[styles.texto4, {color: taller?'green' :'red'}]}>¿Asistirá al taller?</Text>
          <Switch
            value={taller}
            onValueChange={setTaller}
          />
        </View>
        <View style={styles.conteiner_row}>
          <Text style={[styles.texto4, {color: constancia?'green' :'red'}]}>¿Requiere constancia?</Text>
          <Switch
            value={constancia}
            onValueChange={setConstancia}
          />
        </View> 
        <View style={styles.conteiner_row}>
          <Text style={[styles.texto4, {color: deporte?'green' :'red'}]}>¿Participará en deportes?</Text>
          <Switch
            value={deporte}
            onValueChange={setDeporte}
          />  
        </View>
        <Pressable
          style={styles.buttonBox}
          onPressIn={Alerta1}
        >
          <Text style={styles.buttonText}>Enviar Registro</Text>
        </Pressable>
      </View>
        <Componente1/>
        <Componente1/>
        <Componente1/>
        <Componente1/>
        <Componente1/>
        <Componente1/>
      <StatusBar style="auto" />
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:30,
    gap:20,
  },
  safe:{
    flex:1,
    width:'100%',
    backgroundColor:'#ccc',
  },
  scroll:{
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:30,
    gap:20,
  },
  tarjeta1:{
    width:'100%',
    flex:1,
    flexDirection: 'column',
    borderRadius: 20,
    paddingHorizontal:25,
    paddingVertical:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
  },
  conteiner_row:{
    flexDirection:'row',
    width:'100%',
    backgroundColor: 'transparent',
    justifyContent:'space-between',
    alignItems:'center',
  },
  texto:{
    fontWeight: '120',
    color: 'black',
    fontSize: 26,
    textAlign:'center',
  },
  texto3:{
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22,
    textAlign:'center',
    paddingVertical: 20,
  },
  texto2:{
    color: 'black',
    fontSize: 20,
    alignSelf:'flex-start',
  },
  texto4:{
    color: 'black',
    fontSize: 20,
    alignSelf:'center',
  },
  inputBox:{
    width:'100%',
    fontWidth:700,
    backgroundColor:'#fff',
    borderColor: '#cbd5e1',
    borderWidth:1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonBox:{
    backgroundColor: '#4f46e5',
    width: '100%',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color:'white',
  }
});
