import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextoERG} from './TextoERG.js'
import {EncabezadoERG} from './EncabezadoERG.js'
import Ionicons from '@react-native-vector-icons/ionicons';

export const TarjetaCursoBigERG=()=>{
    return(
        <View style={styles.main}>
            <View style={[styles.boxRow,{justifyContent:""}]}>
                <EncabezadoERG texto="Nombre" style={{alignItems:'flex-start'}}/>
                <View style={{alignSelf:'flex-end'}}>
                    <Ionicons name="heart" size={22} color="#900"/>
                </View>
            </View>
            <View style={styles.boxRow}>
                <Ionicons name="time-outline" size={22} color="#900"/>
                <TextoERG texto="HRS"/>
            </View>
            <View style={styles.boxRow}>
                <Ionicons name="star" size={22} color="#900"/>
                <TextoERG texto="Calificación"/>
            </View>
            <View style={styles.boxRow}>
                <Ionicons name="person" size={22} color="#900"/>
                <TextoERG texto="Creador"/>
            </View>
            <View style={[styles.boxRow, {alignSelf:"flex-end"}]}>
                <Ionicons name="pricetag" size={22} color="#900"/>
                <TextoERG texto="Categoría"/>
            </View>
            <View style={styles.boxDesc}>
                <View style={styles.txtDesc}>
                    <TextoERG texto="Descripción"/>
                </View>
                <TextoERG texto="Texto de la descripción"/>
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    main:{
        flexDirection:'column',
        backgroundColor:"green",
        padding:18,
        gap:5,
    },
    boxRow:{
        flexDirection: 'row',
        alignItems:'center',
        gap:5,
    },
    boxDesc: {
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    padding: 12,
    minHeight: 120,
    gap: 8,
    },
    txtDesc: {
        alignSelf: 'flex-start',     // la etiqueta se ajusta a su texto
        backgroundColor: '#808080',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    descLabelTxt: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '700',
    },
    descTxt: {
        color: '#000',
        fontSize: 14,
    },
})