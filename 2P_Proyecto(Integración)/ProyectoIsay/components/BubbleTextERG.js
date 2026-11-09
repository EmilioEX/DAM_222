import {View, Text, StyleSheet} from 'react-native';

export const BubbleTextERG=({texto})=>{
    return(
        <View style={styles.main}>
            <Text style={styles.txt}>{texto}</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    main:{
        backgroundColor:'#354f52',
        borderRadius:15,
        paddingHorizontal:18,
        paddingVertical:3,
        alignItems:'center',
    },
    txt:{
        fontSize:18,
        color:'white',
        textAlign:'center',
    },
})