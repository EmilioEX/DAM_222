
import { View, Text, StyleSheet } from "react-native";

export default function CajaDesc({nombre, mostrarEstrellas = false, colorFondo = '#52796f', estrellas = 5}){
    return(
        <View style = {styles.container}>
            <View style = {[styles.desc, {backgroundColor: colorFondo}]}>
                <Text style = {styles.descTexto}>{nombre}</Text>
            </View>
            {mostrarEstrellas &&(
                <View style = {styles.estrellas}>
                    {Array.from({length: estrellas}, (_, index) =>(
                        <Text style = {styles.texto} key={index}>★</Text>
                    ))}
                </View>
            )}
        </View>
    )
}

//"#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cad2c5',
        alignItems: 'flex-start',
        width: '100%',
        borderRadius: 20,
        padding: 10,
        minHeight: 100,
        marginBottom: 10,
    },
    desc:{
        padding: 7,
        borderRadius: 20,
        
    },
    estrellas:{
        flexDirection: 'row',
        
    },
    texto: {
        fontSize: 22,
        color: '#354f52'
    },
    descTexto:{
        fontSize: 16,
        color: '#2f3e46',
        fontWeight: 'bold'
    }
});