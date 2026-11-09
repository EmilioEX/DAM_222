import { View, Text, StyleSheet } from "react-native";
import Boton from "./Boton";

export default function Reporte({titulo, boton}){
    return(
        <View style = {styles.container}>
            <Text style = {styles.texto}>{titulo}</Text>
            <View style = {styles.contenido}>
            </View>
            <Boton
                textoBoton={boton}
                style={{width:'40%', alignSelf: 'flex-end'}}
            ></Boton>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 20,
        borderColor: '#2f3e46',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#84a98c',
        margin: 10,
        borderWidth: 1,
    },
    contenido: {
        backgroundColor: '#cad2c5',
        alignItems: 'flex-start',
        width: '100%',
        borderRadius: 20,
        padding: 10,
        minHeight: 100,
        marginBottom: 10,
    },
    texto:{
        backgroundColor: '#52796f',
        padding: 8,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 10,
        fontSize: 16,
        color: '#2f3e46',
        fontWeight: 'bold',
    },
});