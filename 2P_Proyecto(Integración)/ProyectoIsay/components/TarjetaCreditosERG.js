import {View, StyleSheet} from 'react-native';
import {BubbleTextERG} from './BubbleTextERG.js';

export const TarjetaCreditosERG=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.lista}>
                <View style={styles.elemento}>
                    <View style={styles.etiqueta}>
                        <BubbleTextERG texto="Créditos Disponibles"/>
                    </View>
                    <View style={styles.valor}>
                        <BubbleTextERG texto="###"/>
                    </View>
                </View>
                <View style={styles.elemento}>
                    <View style={styles.etiqueta}>
                        <BubbleTextERG texto="Créditos Ganados"/>
                    </View>
                    <View style={styles.valor}>
                        <BubbleTextERG texto="###"/>
                    </View>
                </View>
                <View style={styles.elemento}>
                    <View style={styles.etiqueta}>
                        <BubbleTextERG texto="Créditos Disponibles"/>
                    </View>
                    <View style={styles.valor}>
                        <BubbleTextERG texto="###"/>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        backgroundColor:'#52796f',
        borderRadius:15,
        padding:12,
    },
    lista:{
        flexDirection:'column',
        gap:8,
    },
    elemento:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    etiqueta:{
        flex:2,
    },
    valor:{
        flex:1,
    }
})