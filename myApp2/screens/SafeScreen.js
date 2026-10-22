//1.- Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

//2.- Zona Principal (main)
export default function SafeScreen() {
  return (
    <View style={styles.container}>

      
      <StatusBar style="auto" />
    </View>
  );
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