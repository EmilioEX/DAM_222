
import { StyleSheet, Text } from "react-native";

export default function TituloSeccion({titulo}){
    return(
        <Text style={styles.titulo}>{titulo}</Text>
    )
}

//"#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"
const styles = StyleSheet.create({
    titulo:{
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 20,
        padding: 3,
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 28,
        width: '90%',
        color:'#354f52',
        borderColor: '#354f52',
    }
})
