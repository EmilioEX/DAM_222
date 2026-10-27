//1.- Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import MenuScreen from './screens/MenuScreen.js';

//2.- Zona Principal (main)
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

// 3.- Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#635c5c',
    alignItems:'center',
    justifyContent:'center',
  }
});