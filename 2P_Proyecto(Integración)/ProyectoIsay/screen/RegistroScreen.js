//SCREEN PARA EL REGSITRO

import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import InputPersonalizado from "../components/InputPersonalizado";
import Boton from "../components/Boton";
import TextoLink from "../components/TextoLink";

export default function RegistroScreen(){

    const [correo, setCorreo] = useState('')
    const [nombre, setNombre ] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword ] = useState('')

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.vista}>
                <Text style = {styles.titulo}>REGISTRARSE</Text>
                <InputPersonalizado
                    texto = {'CORREO ELECTRONICO'}
                    relleno={'Correo electronico'}
                    valor= {correo}
                    funcion={setCorreo}
                />

                <InputPersonalizado
                    texto = {'NOMBRE COMPLETO'}
                    relleno={'Nombre completo'}
                    valor= {nombre}
                    funcion={setNombre}
                />

                <InputPersonalizado
                    texto = {'TELÉFONO'}
                    relleno={'Teléfono'}
                    valor= {telefono}
                    funcion={setTelefono}
                />

                <InputPersonalizado
                    texto = {'CONTRASEÑA'}
                    relleno={'Contraseña'}
                    valor= {password}
                    funcion={setPassword}
                />

                <Boton
                    style = {{marginTop: 40}}
                    textoBoton = {'REGISTRARSE'}
                />
                <TextoLink
                    linkTexto = {'Iniciar Sesión'}
                />
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cad2c5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vista:{
        backgroundColor: '#ffffff',
        padding: 30,
        borderRadius: 20,
        width: '90%',
        borderWidth: 1,
        borderColor: '#52796f'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 30,
        textAlign: 'center',
        color: '#2f3e46'
    },
});