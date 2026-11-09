//BUSCADOR

import { TextInput, Text, View, StyleSheet, Image,Pressable } from "react-native";

export default function Buscador({valor, funcion}){
    return(
        <View style = {styles.container} >
            <TextInput
                style = {styles.input}
                placeholder="Buscar"
                placeholderTextColor={'#2f3e46'}
                value={valor}
                onChangeText={funcion}
            />
            <Pressable>
                <Image
                    source={require('../assets/img/Lupa.png')}
                    style = {styles.lupa}
                ></Image>
            </Pressable>
            
        </View>
    )
}

//"#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        paddingHorizontal: 12,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        height: 40,
        borderColor: '#2f3e46',
        
    },
    input:{
        flex:1,
        outlineStyle: 'none',
        fontWeigth: '500',
        fontSize: 16,
    },
    lupa:{
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
});
