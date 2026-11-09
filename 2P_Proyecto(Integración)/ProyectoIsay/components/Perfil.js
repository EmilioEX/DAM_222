//Componente para el perfil

import { Image, StyleSheet,View, Pressable } from "react-native";

export default function Perfil(){
    return(
        <View>
            <Pressable style= {styles.press}>
                <Image
                    source={require('../assets/img/Perfil.png')}
                    style = {styles.imagen}
                ></Image>
            </Pressable>
                
        </View>
            
    )
}

//"#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"
const styles = StyleSheet.create({
    press:{
        backgroundColor: '#354f52',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#2f3e46',
    },
    imagen:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
})