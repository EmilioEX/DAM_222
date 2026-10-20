import {Text, View, Button, StyleSheet} from 'react-native';
import {useState} from 'react';

export const Perfil=({nombre, carrera,materia,cuatri,style})=>{
    const [mostrar, setMostrar]=useState(false);
    return(

        <View style={[estilos.tarjeta, style]} >
            <Text style={estilos.nombre} >{nombre} </Text>
            {mostrar && 
                <>
                <Text style={estilos.carrera}>{carrera} </Text>
                <Text style={estilos.otroTexto}>{materia} </Text>
                <Text style={estilos.otroTexto}>{cuatri} </Text>
                </>
            }
            <Button title="Ver Perfil" onPress={ ()=>{ setMostrar(!mostrar) } }/>
        </View>
    )
}
const estilos=StyleSheet.create({
    nombre:{
        fontSize:24,
        fontWeight:800,
        color:'#753AE4',
        textTransform:'uppercase',
    },
    carrera:{
        fontSize:18,
        fontWeight:600,
        color:'purple',
        fontFamily:'Robotto',
    },
    otroTexto:{
        fontSize:15,
        fontWeight:600,
        fontFamily:'Courier',
        fontStyle:'italic'
    },
    tarjeta:{
        backgroundColor:'orange',
        borderWidth:5,
        borderRadius:10,
        padding:15,
        margin:10,
    },
});