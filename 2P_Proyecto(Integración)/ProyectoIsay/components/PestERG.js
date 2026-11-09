import {useState} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {TextoERG} from './TextoERG.js';

export const PestERG=({izq="Cursos Impartidos", der="Solicitudes"})=>{
    const [activo,setActivo]=useState(0);
    return(
        <View style={styles.main}>
            <Pressable
                style={[styles.tab, activo===0 && styles.tabActiva]}
                onPress={()=>setActivo(0)}
            >
                <TextoERG texto={izq} style={styles.txt}/>
            </Pressable>
            <Pressable
                style={[styles.tab, activo===1 && styles.tabActiva]}
                onPress={()=>setActivo(1)}
            >
                <TextoERG texto={der} style={styles.txt}/>
            </Pressable>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        flexDirection:'row',
        backgroundColor:'#52796f',
        borderWidth:1,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:5,
        gap:10,

    },
    tab:{
        flex:1,                   
        borderBottomWidth:3,
        borderBottomColor:'transparent',
    },
    tabActiva:{
        borderBottomColor:'#2f3e46',
    },
    txt:{
        alignSelf:'center',
        fontWeight:'700',
        color:"#fff",
    },
})