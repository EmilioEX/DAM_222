//Importamos componentes usados
import {StyleSheet,Text,View} from 'react-native';
import {useState} from 'react';
import {SwitchMio} from '../components/SwitchMio.js';
import {Componente3} from '../components/Componente3.js';
import {Componente4} from '../components/Componente4.js';

//codigo principal del screen
export default function MainMenu(){
    //Estado (modo) del menú
    const [oscuro, setOscuro] = useState(false);
      return (
        <View style={[styles.container, {backgroundColor: oscuro ? '#2c2b2b' : '#FFFFFF'}]}>


            <View style={styles.posicionSwitch}>
                <Text
                    style={[styles.texto, {color: oscuro ? '#FFFFFF' : '#000000'}]}
                >
                    {oscuro ? 'Modo oscuro activado' : 'Modo claro activado'}
                </Text>
                <SwitchMio
                    oscuro={oscuro}
                    cambiarModo={setOscuro}
                />
            </View>

            <View style={styles.posicionComp1}>
                <Componente3 oscuro={oscuro}/>
            </View>



            <View style={styles.posicionComp1}>
                <Componente4 oscuro={oscuro}/>
            </View>


        </View>
      );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    posicionSwitch:{
        position:'absolute',
        top:10,
        right:20,
        zIndex:10,
    },
    posicionComp1:{
        alignItems: 'center',
        justifyContent: 'center',
    },
});

