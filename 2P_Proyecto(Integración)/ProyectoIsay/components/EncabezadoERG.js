import {View, Text, StyleSheet} from 'react-native';


export const EncabezadoERG=({texto,style,txt})=>{
    return(
        <View style={[styles.main, style]}>
            <Text style={[styles.txt, txt]}>{texto}</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    main:{
        flexGrow:1,
        flexShrink:1,
        width:'100%',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
        color: "#2f3e46",
        fontWeight:600,
        fontSize: 22,
    }

});