import {View,Text, StyleSheet} from 'react-native';
import {BtnERG} from './BtnERG';


export const TarjetaMenuUsuarioERG=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.lista}>
                <View style={styles.elemento}>
                    <BtnERG texto="Uso de Créditos" btn={{backgroundColor:"#84a98c"}}txt={{fontWeight:700}}/>
                </View>
                <View style={styles.elemento}>
                    <BtnERG texto="Estadísticas Personales"  btn={{backgroundColor:"#84a98c"}}txt={{fontWeight:700}}/>
                </View>
                <View style={styles.elemento}>
                    <BtnERG texto="Cursos Tomados" btn={{backgroundColor:"#84a98c"}} txt={{fontWeight:700}}/>
                </View>
                <View style={styles.elemento}>
                    <BtnERG texto="Cursos Impartidos" btn={{backgroundColor:"#84a98c"}} txt={{fontWeight:700}}/>
                </View>
                <View style={styles.elemento}>
                    <BtnERG texto="Favoritos" btn={{backgroundColor:"#84a98c"}} txt={{fontWeight:700}}/>
                </View>
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    main:{
        backgroundColor:'#354f52',
        borderRadius:15,
        padding:12,
    },
    lista:{
        flexDirection:'column',
        gap:25,
    },
    elemento:{
        flexDirection:'column',
    }
})