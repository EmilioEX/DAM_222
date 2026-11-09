
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

export default function BarraInferior(){
    return(
        <View style={styles.container} >
            <View style ={styles.barra}>
                <Pressable>
                    <Image
                        source={require('../assets/img/casa.png')}
                        style = {styles.imagen}
                    ></Image>
                </Pressable>

                <Pressable>
                    <Image
                        source={require('../assets/img/mas.png')}
                        style = {[styles.imagen, {width: 43}]}
                    ></Image>
                </Pressable>
            </View>
        </View>
    )
}
//"#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#354f52',
        width: '90%',
        borderRadius: 20,
        borderWidth: 1,
        height: 60,
        marginBottom: 25,
        borderColor: '#2f3e46'
    },
    barra:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    imagen:{
        resizeMode: 'contain',
        width: 50,
    },
    press:{
        alignItems: 'center',
    },
});