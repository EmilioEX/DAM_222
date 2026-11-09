//Barra superior (Union de horas, buscador y perfil)

import { View, StyleSheet } from "react-native";
import Horas from "./Horas";
import Buscador from "./Buscador";
import Perfil from "./Perfil";

export default function BarraSuperior(){
    return(
        <View style ={styles.barra}>
            <Horas
                hrs={'340'}
            />
            <Buscador
                //valor={''}
                //funcion={''}
            />
            <Perfil/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    barra:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        gap: 10,
    }
});
