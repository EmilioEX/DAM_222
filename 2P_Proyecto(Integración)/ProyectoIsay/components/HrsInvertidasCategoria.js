import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {EncabezadoERG} from './EncabezadoERG.js';
import {TextoERG} from './TextoERG.js';

export const TarjetaHrsCategoriaERG=({valor1=10, valor2=20, valor3=15})=>{
    return(
        <View style={styles.main}>
            <EncabezadoERG texto="Horas Invertidas por Categoría" style={styles.titulo}/>
            <View style={styles.barra}>
                <View style={[styles.segmento, {flex:valor1, backgroundColor:"#2f3e46"}]}>
                </View>
                <View style={[styles.segmento, {flex:valor2, backgroundColor:"#52796f"}]}>
                </View>
                <View style={[styles.segmento, {flex:valor3, backgroundColor:"#CAD2C5"}]}>
                </View>
            </View>
            <View style={styles.leyenda}>
                <View style={styles.boxRow}>
                    <View style={[styles.cuadro, {backgroundColor:"#2f3e46"}]}/>
                    <TextoERG texto="65% Programación"/>
                </View>
                <View style={styles.boxRow}>
                    <View style={[styles.cuadro, {backgroundColor:"#52796f"}]}/>
                    <TextoERG texto="20% Finanzas"/>
                </View>
                <View style={styles.boxRow}>
                    <View style={[styles.cuadro, {backgroundColor:"#CAD2C5"}]}/>
                    <TextoERG texto="15% Electrónica"/>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        flexDirection:'column',
        backgroundColor:'#84a98c',
        borderRadius:15,
        padding:18,
        gap:15,
    },
    titulo:{
        flex:0,
        alignItems:'center',
    },
    barra:{
        flexDirection:'row',
        height:34,
        borderRadius:17,
        overflow:'hidden',
    },
    segmento:{
        alignItems:'center',
        justifyContent:'center',
    },
    pct:{
        color:'#fff',
        fontWeight:'700',
        fontSize:14,
    },
    leyenda:{
        flexDirection:'column',
        gap:8,
    },
    boxRow:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    cuadro:{
        width:22,
        height:22,
        borderWidth:1.5,
        borderColor:'#000',
    },
})