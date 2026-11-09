import {View, StyleSheet} from 'react-native';
import {BtnERG} from './BtnERG.js';
import {PerfilERG} from './PerfilERG.js';
import Ionicons from '@react-native-vector-icons/ionicons';

export const TarjetaPerfilERG=()=>{
    return(
        <View style={styles.main}>
            <View style={styles.lista}>
                <View style={styles.elemento}>
                    <View style={styles.icono}/>
                    <View style={{flex:1}}>
                        <BtnERG texto="Usuario" txt={{fontWeight:700}}/>
                    </View>
                </View>
                <View style={styles.elemento}>
                    <View style={styles.icono}>
                        <Ionicons name="star" size={22} color="orange"/>
                    </View>
                    <View style={{flex:1}}>
                        <BtnERG texto="Calificación" txt={{fontWeight:700}}/>
                    </View>
                </View>
                <View style={styles.elemento}>
                    <View style={styles.icono}>
                        <Ionicons name="mail" size={22} color="#cad2c5"/>
                    </View>
                    <View style={{flex:1}}>
                        <BtnERG texto="Correo Electrónico" txt={{fontWeight:700}}/>
                    </View>
                </View>
                <View style={styles.elemento}>
                    <View style={styles.icono}>
                        <Ionicons name="call-outline" size={22} color="#cad2c5"/>
                    </View>
                    <View style={{flex:1}}>
                        <BtnERG texto="Teléfono" txt={{fontWeight:700}}/>
                    </View>
                </View>
            </View>
            <PerfilERG tamanio={60}/>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#52796f',
        borderRadius:15,
        padding:12,
        gap:12,
    },
    lista:{
        flex:1,
        flexDirection:'column',
        gap:8,
    },
    elemento:{
        flexDirection:'row',
        alignItems:'center',
    },
    icono:{
        width:30,
    }
})