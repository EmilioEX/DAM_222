

//Importaciones de React (nivel 3)
import {StyleSheet, View, Text} from 'react-native';

/*Prueba 1 componentes para "tarjeta" que siempre se extiendan al 100%
    TODOS los componentes (a excepción de tarjetas) deben de ser individuales (encabezado, txt1, txt2, etc)
    Las tarjetas van a ser componentes, pero súnico estilo tiene que ver con su tamaño y centrado (lo demás proviene de los demás componentes)
*/

export const TituloERG=({texto})=>{
    return(
        <View style={styles.main}>
            <Text style={[styles.txt1, styles.clrWhite]}>{texto}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        flexGrow:1,
        flexShrink:1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt1:{
        fontSize: 28,
        fontWeight:700,
    },
    clrWhite:{
        color: "#2f3e46",
    },
    bkgWhite:{
        width:'100%',
        backgroundColor: "yellow",
    }

});