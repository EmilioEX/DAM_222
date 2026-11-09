
import { Pressable, Text, View, StyleSheet } from "react-native";

export default function Boton({textoBoton, style}){
    return(
        <Pressable style = {[styles.boton, style]}>
            <Text style = {styles.texto}>{textoBoton}</Text>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#354f52',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#2f3e46',
        width: '96%',
        alignSelf: 'center',
    },
    texto:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#cad2c5'
    },
});
