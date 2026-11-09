import {View, StyleSheet, Text, Pressable} from 'react-native';
import {TextoERG} from './TextoERG.js';


export const BtnERG=({texto, btn,txt})=>{
    return(
        <View style={[styles.main, btn]}>
            <Pressable style={styles.btn}>
                <TextoERG texto={texto} style={[{color:"#354f52", alignSelf:'center'}, txt]}/>
            </Pressable>
        </View>
    );
}

const styles=StyleSheet.create({
    main: {
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#cad2c5',
        paddingHorizontal:25,
    },
    btn:{
    }
})