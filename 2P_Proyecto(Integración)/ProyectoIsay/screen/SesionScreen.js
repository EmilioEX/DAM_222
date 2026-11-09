//Screen para el inicio de sesión

import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import InputPersonalizado from "../components/InputPersonalizado";
import Boton from "../components/Boton";
import TextoLink from "../components/TextoLink";

export default function SesionScreen(){

    const [correo, setCorreo] = useState('')
    const [password, setPassword ] = useState('')

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.vista}>
                <Text style = {styles.titulo}>INICIO DE SESIÓN</Text>
                <InputPersonalizado
                    texto = {'CORREO ELECTRONICO'}
                    relleno={'Correo electronico'}
                    valor= {correo}
                    funcion={setCorreo}
                />

                <InputPersonalizado
                    texto = {'CONTRASEÑA'}
                    relleno={'Contraseña'}
                    valor= {password}
                    funcion={setPassword}
                />

                <Boton
                    style = {{marginTop: 40}}
                    textoBoton = {'INICIAR SESIÓN'}
                />
                <TextoLink
                    linkTexto = {'Registrarse'}
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
        color: '#2f3e46',
    },
});
