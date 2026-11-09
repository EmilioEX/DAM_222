
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import BarraSuperior from "../components/BarraSuperior";
import BarraInferior from "../components/BarraInferior";
import TituloSeccion from "../components/TituloSeccion";
import CajaBase from "../components/CajaBase";

export default function CategoriaScreen() {
    const listaCategoriasCajas = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
    }));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.superior}>
                <BarraSuperior></BarraSuperior>
                <TituloSeccion
                    titulo={'CATEGORÍA'}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                <View style={styles.contenido}>
                    {listaCategoriasCajas.map((item) => (
                        <CajaBase
                            key={item.id}
                            mostrarInformacion={false}
                            mostrarEtiqueta={true}
                            alto={130}
                            ladoEtiqueta="flex-start"
                            ocuparEspacio={true}
                        />
                    ))}
                </View>
            </ScrollView>
            <BarraInferior></BarraInferior>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cad2c5',
        alignItems: 'center',
        paddingTop: 50,
    },
    superior: {
        width: '100%',
        alignItems: 'center',
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
    contenido: {
        padding: 15,
        borderRadius: 20,
        borderColor: '#2f3e46',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignSelf: 'center',

    },
});