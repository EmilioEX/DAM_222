import {View,Text} from 'react-native';
import {StyleSheet} from 'react-native';

export const Componente1=()=>{
    return(
        <View style={styles.conteiner}>
            <Text>
                Caja de Prueba
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    conteiner:{
        borderRadius:40,
        backgroundColor:'pink',
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    }
});
