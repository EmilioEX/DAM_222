import {View, Image, StyleSheet} from 'react-native';
import {EncabezadoERG} from './EncabezadoERG.js';

export const TarjetaGraficaCreditosERG=()=>{
    return(
        <View style={styles.main}>
            <EncabezadoERG texto="Gráfica de Créditos" style={styles.titulo}/>
            <Image
                source={require('../assets/img/graficaLineas.png')}
                style={styles.imagen}
                resizeMode="contain"
            />
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
    imagen:{
        width:'100%',
        height:180,
    },
})