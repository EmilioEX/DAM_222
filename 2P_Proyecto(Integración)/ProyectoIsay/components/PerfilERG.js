import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

export const PerfilERG=({tamanio})=>{
    const [estado,setEstado]=useState(true);
    return(
        <View style={[styles.main, {borderRadius: estado?tamanio:false}]}>
            <Ionicons name="person" size={tamanio} color="#2f3e46"/>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        alignSelf: "flex-start",
        backgroundColor:"#cad2c5",
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        paddingHorizontal:10,
        borderRadius: 25,
    }
})