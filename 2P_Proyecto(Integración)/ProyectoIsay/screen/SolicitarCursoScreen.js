import { SafeAreaView, View, Text, StyleSheet, ScrollView, Image } from "react-native";
import BarraSuperior from "../components/BarraSuperior";
import TituloSeccion from "../components/TituloSeccion";
import BarraInferior from "../components/BarraInferior";
import CajaBase from "../components/CajaBase";
import CajaDesc from "../components/CajaDesc";
import Boton from "../components/Boton";
import Reporte from "../components/Reportar";

export default function SolicitarCursoScreen() {

    const reseñaLista = Array.from({length: 3}, (_, index) => ({
        id: index +1,
    }))

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.superior}>
                <BarraSuperior />
                <TituloSeccion
                    titulo={'SOLICITAR CURSO'}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                <View style={styles.contenido}>
                    <CajaBase
                        nombre={'Nombre'}
                        hrs={'Horas'}
                        calificacion={'Calificación'}
                        creador={'Creador'}
                        mostrarInformacion={true}
                        mostrarEtiqueta={true}
                        ancho="100%"
                        ladoEtiqueta="flex-end"
                    />
                    <CajaDesc
                        nombre={'Descripción'}
                    ></CajaDesc>
                </View>
                
                <Boton
                    style={{width: '70%'}}
                    textoBoton = {'SOLICITAR'}
                />

                <View style = {styles.reseñas}>
                    <Text style={styles.texto}>RESEÑAS</Text>
                    <View style = {styles.linea}>
                        <Image
                            source={require('../assets/img/estrella.png')}
                            style = {styles.img}
                        ></Image>
                        <Text style = {styles.sub}>Calificación</Text>
                    </View>
                    {reseñaLista.map((item) =>(
                        <CajaDesc
                            key={item.id}
                            nombre={'Usuario'}
                            mostrarEstrellas={true}
                            colorFondo={"#52796f"}
                        ></CajaDesc>
                    ))}
                </View>

                <Reporte
                    titulo = {'Reportar Problema'}
                    boton={'Enviar'}
                ></Reporte>
            </ScrollView>
            <BarraInferior/>
        </SafeAreaView>
    )
}
//"#cad2c5","#84a98c","#52796f","#354f52","#2f3e46"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cad2c5',
        alignItems: 'center',
        paddingTop: 50,
    },
    scroll: {
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#fff',
        width: '90%',
        borderWidth: 1,
        borderColor: '#354f52'
    },
    superior: {
        width: '100%',
        alignItems: 'center',
    },
    contenido: {
        padding: 15,
        borderRadius: 20,
        borderColor: '#2f3e46',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#84a98c',
        margin: 10,
        borderWidth: 1,
    },
    texto: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 22,
        color: '#354f52',
    },
    reseñas: {
        backgroundColor: '#84a98c',
        padding: 15,
        borderRadius: 20,
        borderColor: '#2f3e46',
        margin: 10,
        borderWidth: 1,
        marginBottom: 50,
    },
    img:{
        resizeMode: 'contain',
        width: 20,
    }, 
    sub:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#2f3e46',
        
    },
    linea:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
    }
})