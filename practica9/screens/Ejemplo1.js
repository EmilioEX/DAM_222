//Importamos componentes usados
import {StatusBar} from 'expo-status-bar';
import {StyleSheet,Text,View,Image} from 'react-native';
import {Componente1} from '../components/Componente1.js';

//codigo principal del screen
export default function Ejemplo1(){
    return(
        <View>
            <Componente1/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
    },
});

