import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import MainMenu from './screens/MainMenu.js';

export default function App() {
  return (
    <View style={styles.container}>
      <MainMenu/>
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});