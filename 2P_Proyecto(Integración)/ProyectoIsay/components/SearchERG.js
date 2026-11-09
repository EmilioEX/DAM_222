import {View, TextInput, StyleSheet} from 'react-native';
import {useState} from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
export const SearchERG=()=>{
    const [busqueda,setBusqueda]=useState('');
    return(
        <View style={styles.main}>
            <TextInput
                style={styles.inputBox}
                placeholder={"Búsqueda..."}
                placeholderTextColor="#94a3b8"
                value={busqueda}
                onChangeText={setBusqueda}
            />
            <View style={{paddingHorizontal:10}}>
                <Ionicons name="search" size={22} color="#900" />
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        borderWidth:1.5,
        borderRadius:25,
        paddingHorizontal:18,
    },
    inputBox:{
        //#Emz
        flex:1,
        fontWeight:700,
        //Mico
        borderColor: '#cbd5e1',
        fontSize: 16,
    },
});