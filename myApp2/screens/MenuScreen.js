//1.- Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreen from './SafeScreen';

//2.- Zona Principal (main)
export default function MenuScreen() {
    const[screen,setScreen]=useState('menu');
    switch(screen){
        case 'tarjetas':
            return <Tarjetas/>
        case 'safeScreen':
            return <SafeScreen/>
        case 'pressable&Switch':
            return <PressableSwitch/>
        case 'textInput&Alert':
            return <TextInputAlert/>
        case 'flatList&SectionList':
            return <FlatListSectionList/>
        case 'imageBackground&SlapshScreen':
            return <ImageBackgroundSlapshScreen/>
        case 'modal&BottomSheet':
            return <ModalBottomSheet/>
        case 'activityIndicator':
            return <ActivityIndicator/>
        case 'menu':
            default:
            return (
                <View style={styles.container}>
                    <Text> Menú de Prácticas</Text>
                    <Button title='Tarjetas' onPress={ ()=>setScreen('tarjetas')}></Button>
                    <Button title='SafeAreaView' onPress={ ()=>setScreen('safeScreen')}></Button>
                    
                    <Button title='pressable&Switch' onPress={ ()=>setScreen('pressable&Switch')}></Button>
                    <Button title='textInput&Alert' onPress={ ()=>setScreen('textInput&Alert')}></Button>
                    <Button title='flatList&SectionList' onPress={ ()=>setScreen('flatList&SectionList')}></Button>
                    <Button title='imageBackground&SlapshScreen' onPress={ ()=>setScreen('imageBackground&SlapshScreen')}></Button>
                    <Button title='modal&BottomSheet' onPress={ ()=>setScreen('modal&BottomSheet')}></Button>
                    <Button title='activityIndicator' onPress={ ()=>setScreen('activityIndicator')}></Button>
                
                    

                <StatusBar style="auto" />
                </View>
            );
    }
}

// 3.- Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});