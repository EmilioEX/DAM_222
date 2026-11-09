import {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons'

export const TimeERG=()=>{
    return(
        <View style={styles.main}>
            <View style={{paddingRight:5}}>
                <Ionicons name="time-outline" size={22} color="#cad2c5"/>
            </View>
            <Text style={styles.txt}>123</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        alignSelf:"flex-start",
        backgroundColor: "#354f52",
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1.5,
        borderRadius:25,
        paddingHorizontal:10,
    },
    txt:{
        color: "#cad2c5",
        fontSize:16,
        fontWeight: 700,
    }
})