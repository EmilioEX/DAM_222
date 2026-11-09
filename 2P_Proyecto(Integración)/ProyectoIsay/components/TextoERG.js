import {StyleSheet,View,Text} from 'react-native';


export const TextoERG=({texto,style})=>{
    return(
        <View style={styles.main}>
            <Text style={[styles.txt, style]}>{texto}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        flexGrow:1,
        flexShrink:1,
        flexDirection: 'column',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
        fontWeight:900,
        fontSize: 18,
        alignSelf:'flex-start',
        color:"#354f52",
    }
}); 