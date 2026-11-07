import {useState} from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar} from 'expo-status-bar';
import { View,Text, TextInput, StyleSheet,ScrollView, ImageBackground, InputText, Pressable, Alert, FlatList, ActivityIndicator} from 'react-native';

export default function MainScreen(){
    const [titulo, setTitulo]=useState('');
    const [autor, setAutor]=useState('');
    const [genero, setGenero]=useState('');
    const [contador, setContador]=useState(0);
    const [estado, setEstado]=useState(false);
    const [lista,setLista]=useState([]);

    const Alerta1=()=>{
        if(!titulo.trim() || !autor.trim() || !genero.trim()){
            Alert.alert('ERROR',
                        `Campos incompletos
Debes de llenar todos los campos`,
                        [{text:"Aceptar"}]);
            return;
        } else {
            setEstado(true);
            setTimeout(()=>{
                setEstado(false);
                Alert.alert('Bien hecho', `Libro guardado correctamente`, [{text:"Aceptar"}]);
                setLista([...lista, {titulo:titulo,autor:autor,genero:genero}]);
                setTitulo('');
                setAutor('');
                setGenero('');
            }, 4000);
        }
    }

    
    return(
        <ImageBackground
            source={{uri:
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIl4F3MCJ6-ZjYgOxnyXwGC_yzMBQiKhY3kR3EbWqhQ&s"}}
            style={styles.container}
            resizeMode="cover"
        >
        <SafeAreaProvider style={styles.safe}>
        <SafeAreaView style={styles.safe}>
            <Text style={styles.texto}>Catálogo de libros</Text>
            <TextInput
                style={styles.inputBox}
                placeholder={"Titulo del libro..."}
                placeholderTextColor="#94a3b8"
                value={titulo}
                onChangeText={setTitulo}
            />
            <TextInput
                style={styles.inputBox}
                placeholder={"Autor..."}
                placeholderTextColor="#94a3b8"
                value={autor}
                onChangeText={setAutor}
            />
            <TextInput
                style={styles.inputBox}
                placeholder={"Genero..."}
                placeholderTextColor="#94a3b8"
                value={genero}
                onChangeText={setGenero}
            />
            <Pressable
                style={styles.buttonBox}
                onPress={()=>{Alerta1();}}
            >
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                    {estado && <ActivityIndicator size="large" color="#fff" style={{marginVertical: 10}} />}
                    <Text selectable={false} style={styles.texto}>AgregarLibro</Text>
    
                </View>
            </Pressable>
            <Text selectable={false} style={styles.texto}>Total de libros: {lista.length}</Text>
            <FlatList   
                style={styles.box2}
                data={lista}
                keyExtractor={(item)=>item.titulo}
                renderItem={({item})=>(
                    <View style={styles.box}>
                        <Text style={styles.texto3}>{item.titulo}</Text>
                        <Text style={styles.texto2}>Autor: {item.autor}</Text>
                        <Text style={styles.texto2}>Género: {item.genero}</Text>
                    </View>
                )}
            >
            </FlatList>
        </SafeAreaView>
        </SafeAreaProvider>
        </ImageBackground>

    );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop:20,
    gap:10,
  },
    texto:{
        color:"white",
        fontSize:20,
        fontWeight:700,
    },
    texto3:{
        color:"black",
        fontSize:20,
        fontWeight:700,
    },
    texto2:{
        color:"white",
        fontSize:18,
        fontWeight:500,
        padding:10,
    },
    box_input:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"yellow",
    },
    box:{
        width: '100%',
        backgroundColor: "#9fd8e2",
        borderWidth:1,

    },
    box2:{
        width: '100%',
        gap:30,
    },
    safe:{
        flex:1,
        width:'100%',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
    },
    scroll:{
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:30,
        gap:20,
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
});