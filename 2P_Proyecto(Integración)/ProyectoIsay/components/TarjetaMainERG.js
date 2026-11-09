import {StyleSheet, View} from 'react-native';

export const TarjetaMainERG=({children})=>{
    return(
        <View style={styles.main}>
            {children}
        </View>
    );
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        width:"100%",
        backgroundColor: "#cad2c5",
        padding: 20,
        minHeight:0,
        alignSelf:'flex-start',
        borderRadius:25,
        borderWidth:1,
        borderColor:"#2f3e46",
        overflow:"hidden",
    }
})