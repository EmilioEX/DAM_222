import {TituloERG} from './TituloERG';
import {View, StyleSheet} from 'react-native';
import  Ionicons from '@react-native-vector-icons/ionicons'


export const TituloTarjetaERG=({texto})=>{
    return(
        <View style={styles.main}>
            <View style={styles.icono}>
                <Ionicons name="arrow-back" size={22} color="900"/>
            </View>
            <TituloERG texto={texto}/>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25,
        borderWidth:1,
        backgroundColor:"#cad2c5",
        borderColor:"#2f3e46",
        paddingHorizontal:25,
    },
    icono:{
        alignSelf:'center',
        paddingRight: 25,
    }
})