

import { Text, View, StyleSheet, Image } from "react-native";

export default function CajaBase({ nombre, hrs, calificacion, creador, mostrarInformacion = true, mostrarEtiqueta = false, ancho = '48%', alto, ladoEtiqueta = 'flex-start', ocuparEspacio = false, imagenCorazon = require('../assets/img/corazon.png') }) {
    return (
        <View style={[styles.container, { width: ancho, height: alto }]}>

            {mostrarInformacion && (
                <>
                    <View style={styles.corazon}>
                        <Text style={styles.texto}>{nombre}</Text>
                        <Image
                            source={imagenCorazon}
                            style={styles.imgCorazon}
                        />
                    </View>

                    <View style={styles.linea}>
                        <Image
                            source={require('../assets/img/Reloj.png')}
                            style={styles.imagen}
                        />
                        <Text style={styles.texto}>{hrs}</Text>
                    </View>

                    <View style={styles.linea}>
                        <Image
                            source={require('../assets/img/estrella.png')}
                            style={styles.imagen}
                        />
                        <Text style={styles.texto}>{calificacion}</Text>
                    </View>

                    <View style={styles.linea}>
                        <Image
                            source={require('../assets/img/Perfil.png')}
                            style={styles.imagen}
                        />
                        <Text style={styles.texto}>{creador}</Text>
                    </View>
                </>
            )}

            {mostrarEtiqueta && (
                <View style={[styles.etiquetaContenedor, { alignItems: ladoEtiqueta, flex: ocuparEspacio ? 1 : 0 }]}>
                    <Image
                        source={require('../assets/img/etiqueta.png')}
                        style={styles.etiqueta}
                    />
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#84a98c',
        padding: 20,
        borderRadius: 20,
        marginBottom: 15,
    },
    linea: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center'
    },
    imagen: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 10,
        marginTop: 4,
    },
    corazon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgCorazon: {
        width: 25,
        height: 20,
        resizeMode: 'contain',
    },
    etiqueta: {
        width: 110,
        height: 30,
        resizeMode: 'stretch',
    },
    etiquetaContenedor: {
        marginTop: 15,
        justifyContent: 'flex-end',
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2f3e46',
    },
});
