//COMPONENTE PARA MOSTRAR LAS HORAS

import { Pressable, Text, View, StyleSheet, Image } from "react-native";

export default function Horas({hrs}){
    return(
        <View style={styles.container} >
            <Pressable style= {styles.press}>
                <Image
                    source={require('../assets/img/Reloj.png')}
                    style = {styles.reloj}
                />
                <Text style={styles.horas} >{hrs}</Text>
            </Pressable>
        </View>
    )
}

//"#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        
    },
    press:{
        flexDirection:'row',
        backgroundColor: '#354f52',
        borderRadius: 20,
        alignItems:'center',
        borderWidth:1,
        height: 40,
        paddingRight: 10,
        borderColor: '#2f3e46',
    },
    reloj:{
        backgroundColor:'#cad2c5',
        borderRadius: 20,
        borderWidth:2,
        borderColor: '#cad2c5',
        margin:6,
        width: 25,
        height:25,
    },
    horas:{
        marginLeft: 2,
        color: '#cad2c5',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
