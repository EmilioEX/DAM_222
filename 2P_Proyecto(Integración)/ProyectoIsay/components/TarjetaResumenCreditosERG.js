import {View, StyleSheet} from 'react-native';
import {BubbleTextERG} from './BubbleTextERG.js';
import {TextoERG} from './TextoERG.js';
import {EncabezadoERG} from './EncabezadoERG.js';
import Ionicons from '@react-native-vector-icons/ionicons';

export const TarjetaResumenCreditosERG=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.boxBubble}>
                <BubbleTextERG texto="+- # Créditos"/>
            </View>
            <View style={styles.card}>
                <View style={styles.boxRow}>
                    <EncabezadoERG texto="Nombre" style={{alignItems:'flex-start'}}/>
                    <View style={{alignSelf:'flex-start'}}>
                        <Ionicons name="heart-outline" size={28} color="#000"/>
                    </View>
                </View>
                <View style={styles.boxRow}>
                    <Ionicons name="time-outline" size={22} color="#000"/>
                    <TextoERG texto="Hrs"/>
                </View>
                <View style={styles.boxRow}>
                    <Ionicons name="star" size={22} color="orange"/>
                    <TextoERG texto="Calificación"/>
                </View>
                <View style={styles.boxRow}>
                    <Ionicons name="person" size={22} color="#fff"/>
                    <TextoERG texto="Creador"/>
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
        gap:8,
    },
    boxBubble:{
        alignSelf:'flex-start',   // la burbuja se ajusta a su texto, no se estira
    },
    card:{
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
})