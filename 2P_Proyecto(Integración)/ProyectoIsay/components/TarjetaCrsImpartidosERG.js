import {View, Pressable, StyleSheet} from 'react-native';
import {TextoERG} from './TextoERG.js';
import {EncabezadoERG} from './EncabezadoERG.js';
import {BtnERG} from './BtnERG.js';
import Ionicons from '@react-native-vector-icons/ionicons';

export const TarjetaCrsImpartidosERG=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.boxRow}>
                <EncabezadoERG texto="Nombre" style={{alignItems:'flex-start'}}/>
            </View>
            <View style={styles.boxRow}>
                <Ionicons name="time-outline" size={22} color="#000"/>
                <TextoERG texto="Hrs" style/>
            </View>
            <View style={styles.boxRow}>
                <Ionicons name="star" size={22} color="orange"/>
                <TextoERG texto="Calificación"/>
            </View>
            <View style={styles.footer}>
                <View style={styles.boxBtn}>
                    <BtnERG texto="Ver detalles"/>
                </View>
                <View style={[styles.boxRow, {alignSelf:"flex-end"}]}>
                    <Ionicons name="pricetag" size={22} color="#900"/>
                    <TextoERG texto="Categoría"/>
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
        gap:5,
    },
    boxRow:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        marginTop:5,
    },
    boxBtn:{
        alignSelf:'flex-start',
    },
})